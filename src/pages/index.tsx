import Task from "@/components/task";
import Input from "@/components/input";
import { useTasks } from "@/hooks/useTasks";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <>
      <main className="absolute flex flex-col items-center justify-start w-full h-screen gap-5 py-16 transition-all bg-slate-100 dark:bg-gray-900">
        <Input />
        <section className="flex flex-col items-start w-48 mt-5">
          {tasks.map((item) => (
            <Task title={item} key={item} />
          ))}
        </section>
      </main>
    </>
  );
}
