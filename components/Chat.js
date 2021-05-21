import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import {auth} from '../firebase'
import getRecipientEmail from "../utilis/getRecipientEmail";

function Chat({ id, users }) {
    const [user] = useAuthState(auth);
    const recipientEmail = getRecipientEmail(users, user)
    

    return (
        <Container>
            <UserAvatar/>
            <p>{recipientEmail}</p>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    word-wrap: break-word;

    :hover{
        background-color: lightcyan;
    } 
`;

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`;