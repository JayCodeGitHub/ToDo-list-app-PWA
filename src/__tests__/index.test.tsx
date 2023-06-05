import { render } from "@testing-library/react";
import Home from "@/pages/index";
import { TasksProvider } from "@/hooks/useTasks";

test("home page is rendering", () => {
  render(
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
});
