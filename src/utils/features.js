import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

const features = [
  {
    id: 1,
    title: "Todo List",
    image: todo,
    link: "/todolist",
    itemClassname: "option__link_features",
  },
  {
    id: 2,
    title: "Calendar",
    image: calendar,
    link: "/calendar",
    itemClassname: "option__link_features",
  },
  {
    id: 3,
    title: "Reminders",
    image: reminders,
    link: "/reminders",
    itemClassname: "option__link_features",
  },
  {
    id: 4,
    title: "Planning",
    image: planning,
    link: "/planning",
    itemClassname: "option__link_features",
  },
];

export default features;
