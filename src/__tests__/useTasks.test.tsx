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

test("RemoveTask removes an item from the list tasks", () => {
  const wrapper = ({ children }: WrapperProps) => (
    <TasksProvider>{children}</TasksProvider>
  );

  const { result } = renderHook(() => useTasks(), { wrapper });
  act(() => {
    result.current.addTask("New Task");
    result.current.removeTask("New Task");
  });
  const { tasks } = result.current;
  expect(tasks).toEqual([]);
});

test("setStatus change staus of task", () => {
  const wrapper = ({ children }: WrapperProps) => (
    <TasksProvider>{children}</TasksProvider>
  );

  const { result } = renderHook(() => useTasks(), { wrapper });
  act(() => {
    result.current.addTask("New Task");
    result.current.addTask("New Task2");
    result.current.setStatus("New Task");
  });
  const { tasks } = result.current;
  expect(tasks[1]).toEqual({ done: true, title: "New Task" });
});
