import { useTasks } from "@/hooks/useTasks";
import { renderHook, act } from "@testing-library/react";
import { TasksProvider } from "@/hooks/useTasks";

interface WrapperProps {
  children: React.ReactNode;
}

test("Inital value of tasks is []", () => {
  const wrapper = ({ children }: WrapperProps) => (
    <TasksProvider>{children}</TasksProvider>
  );
  const { result } = renderHook(() => useTasks(), { wrapper });
  const { tasks } = result.current;
  expect(tasks).toEqual([]);
});

test("AddTask adds an item to the list tasks", () => {
  const wrapper = ({ children }: WrapperProps) => (
    <TasksProvider>{children}</TasksProvider>
  );

  const { result } = renderHook(() => useTasks(), { wrapper });
  act(() => {
    result.current.addTask("New Task");
  });
  const { tasks } = result.current;
  expect(tasks[0]).toEqual({ done: false, title: "New Task" });
});
