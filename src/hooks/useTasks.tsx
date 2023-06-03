import React, { useContext, useState } from "react";

interface TasksProviderProps {
  children: React.ReactNode;
}

interface TasksContextProps {
  tasks: Array<{ title: string; done: boolean }>;
  addTask: (task: string) => void;
  removeTask: (task: string) => void;
  setStatus: (task: string) => void;
}

const TasksContext = React.createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Array<{ title: string; done: boolean }>>(
    []
  );

  const addTask = (task: string) => {
    setTasks((tasks) => [{ title: task, done: false }, ...tasks]);
  };

  const removeTask = (task: string) => {
    setTasks((tasks) =>
      tasks.filter((taskElement) => taskElement.title != task)
    );
  };

  const setStatus = (title: string) => {
    const updatedTasks = tasks.map((item) => {
      if (item.title === title) {
        if (!item.done) {
          return { ...item, done: true };
        } else {
          return { ...item, done: false };
        }
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, setStatus }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const tasksContext = useContext(TasksContext);

  return tasksContext;
};
