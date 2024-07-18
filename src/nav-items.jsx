import { Home, Info, ListTodo, Clock } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Todo from "./pages/Todo.jsx";
import InProgress from "./pages/InProgress.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "TODO",
    to: "/todo",
    icon: <ListTodo className="h-4 w-4" />,
    page: <Todo />,
  },
  {
    title: "In Progress",
    to: "/in-progress",
    icon: <Clock className="h-4 w-4" />,
    page: <InProgress />,
  },
];