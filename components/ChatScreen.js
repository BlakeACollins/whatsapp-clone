import { Avatar, IconButton } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components'
import { auth, db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import {  Message } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'



function ChatScreen({ chat, messages }) {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [messageSnapshot] = useCollection(db
        .collection('chats')
        .doc(router.query.id)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        );

    const showMessage = () => {
        if(messageSnapshot){
            return messageSnapshot.docs.map(message => (
                <Message
                key={message.id}
                user={message.date().user}
                message={{
                    ...message.data(),
                    timestamp: message.data().timestamp?.toDate().getTime(),
                }}
                />
            ));
        }
    }


    return (
        <Container>
            <Header>
                <Avatar />

                <HeaderInformation>
                    <h4>Recipient Email</h4>
                    <p>Last seen...</p>
                </HeaderInformation>
                <HeaderIcons>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </HeaderIcons>
            </Header>

            <MessageContainer>
                {/**SHOW MESSAGE */}
                {showMessage()}
                <EndOfMessage/>
            </MessageContainer>

            <InputContainer>
                <InsertEmoticonIcon />
                <Input />
            </InputContainer>
        </Container>
    )
}

export default ChatScreen

const Container = styled.div``;

const Header = styled.div`
    position: sticky;
    background-color: #fff;
    z-index: 100;
    top: 0;
    display: flex;
    padding: 10px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
    margin-left: 15px;
    flex: 1;

    > h4 {
        margin-bottom: 3px;
    }

    > p {
        font-size: 12px;
        color: gray;
    }
`;

const HeaderIcons = styled.div``;

const EndOfMessage = styled.div``;

const MessageContainer = styled.div``;

const Input = styled.div``;

const InputContainer = styled.form`
    display: flex;
    align-items: center;
    padding: 10px;
    position: sticky;
    bottom: 0;
    background-color: white;
    z-index: 100;
`;