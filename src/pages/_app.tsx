import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TasksProvider } from "@/hooks/useTasks";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TasksProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TasksProvider>
  );
}
