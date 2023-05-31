import CheckBox from "@/components/checkBox";
import TaskLabel from "@/components/taskLabel";

export default function Home() {
  return (
    <main className="bg-red-500">
      <h1>Happy Notes</h1>
      <CheckBox />
      <TaskLabel />
    </main>
  );
}
