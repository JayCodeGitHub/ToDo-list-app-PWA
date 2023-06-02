import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TasksProvider } from "@/hooks/useTasks";
import Layout from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ToDo App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TasksProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TasksProvider>
    </>
  );
}
