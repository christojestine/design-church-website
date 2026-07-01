import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import MassTimes from "./pages/MassTimes";
import Ministries from "./pages/Ministries";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// In production (GitHub Pages) the app is served from /design-church-website/.
// basename tells React Router to treat that sub-path as the root.
const basename =
  process.env.NODE_ENV === "production" ? "/design-church-website" : "/";

export const router = createBrowserRouter(
  [
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
  ],
  { basename }
);