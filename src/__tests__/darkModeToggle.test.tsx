import { render, fireEvent, getByRole } from "@testing-library/react";
import DarkModeToggle from "@/components/darkModeToggle";

test("Dark Mode Toggle is work", () => {
  let toggle: any = render(<DarkModeToggle>DarkMode</DarkModeToggle>).getByText(
    "DarkMode"
  );

  fireEvent.click(toggle);
  expect(window.localStorage.getItem("darkMode")).toBe("dark");
});
