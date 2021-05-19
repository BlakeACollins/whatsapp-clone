import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp Clone</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  )
}
