import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Notes from "../components/notes/notes";
import Nav from "../components/nav/nav";
import Modal from "../components/modal/modal";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <Nav />
      <Notes />
      {(router.query.note || router.query.mode) && <Modal />}
    </>
  );
}
