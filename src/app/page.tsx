import Head from "next/head";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("auth/login");
  return (
    <>
      <Head>
        <p>Auth</p>
      </Head>
    </>
  );
}
