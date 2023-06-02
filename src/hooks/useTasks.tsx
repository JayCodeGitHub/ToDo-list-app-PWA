import React, { useContext, useState } from "react";

interface TasksProviderProps {
  children: React.ReactNode;
}

interface TasksContextProps {
  tasks: Array<string>;
  addTask: (task: string) => void;
  removeTask: (task: string) => void;
}

const TasksContext = React.createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Array<string>>([]);

  const addTask = (task: string) => {
    setTasks((tasks) => [task, ...tasks]);
  };

  const removeTask = (task: string) => {
    setTasks((tasks) => tasks.filter((e) => e != task));
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
