import React, { useCallback, useContext, useState } from "react";

interface TasksProviderProps {
  children: React.ReactNode;
}

interface TasksContextProps {
  tasks: Array<string>;
  addTask: (task: string) => void;
}

const TasksContext = React.createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState([
    `Buy groceries for the week`,
    `Complete a 30-minute workout`,
    `Call and schedule a doctor`,
    `Reply to important emails`,
    `Organize and declutter the living room`,
    `Read a chapter of a book`,
    `Pay bills and update the budget`,
    `Start a new hobby or learn a new skill`,
    `Write a thank-you note to a friend`,
    `Plan a weekend getaway or day trip`,
  ]);

  const addTask = (task: string) => {
    setTasks((tasks) => [task, ...tasks]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const tasksContext = useContext(TasksContext);

  return tasksContext;
};
