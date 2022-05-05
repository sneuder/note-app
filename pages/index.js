import Head from 'next/head'
import Image from 'next/image'

import Notes from '../components/notes/notes'
import Nav from '../components/nav/nav'

export default function Home() {
  return (
    <>
    <Head>
      <title>Notes</title>
    </Head>
    <Nav />
    <Notes />
    </>
  )
}
