import React, { useContext, useState, useEffect } from "react";

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

  useEffect(() => {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      setTasks(JSON.parse(localStorage.getItem("tasks") || ""));
    }
  }, []);

  const addTask = async (task: string) => {
    setTasks((tasks) => [{ title: task, done: false }, ...tasks]);

    localStorage.setItem(
      "tasks",
      JSON.stringify([{ title: task, done: false }, ...tasks])
    );
  };

  const removeTask = (task: string) => {
    setTasks((tasks) =>
      tasks.filter((taskElement) => taskElement.title != task)
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((taskElement) => taskElement.title != task))
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
    setTasks((prevTasks) => {
      return prevTasks.map((item) => {
        if (item.title === title) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
