import React, { useContext, useState } from "react";

interface TasksProviderProps {
  children: React.ReactNode;
}

interface TasksContextProps {
  tasks: Array<{ title: string; status: string }>;
  addTask: (task: string) => void;
  removeTask: (task: string) => void;
}

const TasksContext = React.createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Array<{ title: string; status: string }>>(
    []
  );

  const addTask = (task: string) => {
    setTasks((tasks) => [{ title: task, status: "todo" }, ...tasks]);
  };

  const removeTask = (task: string) => {
    setTasks((tasks) =>
      tasks.filter((taskElement) => taskElement.title != task)
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const tasksContext = useContext(TasksContext);

  return tasksContext;
};
