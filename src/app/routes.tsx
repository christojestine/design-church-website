import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import MassTimes from "./pages/MassTimes";
import Ministries from "./pages/Ministries";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "mass-times", Component: MassTimes },
      { path: "ministries", Component: Ministries },
      { path: "media", Component: Media },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);