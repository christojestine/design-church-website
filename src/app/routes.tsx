import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Layout from "./Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Ministries = lazy(() => import("./pages/Ministries"));
const Media = lazy(() => import("./pages/Media"));
const Contact = lazy(() => import("./pages/Contact"));
const ParishTeam = lazy(() => import("./pages/ParishTeam/ParishTeam"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
        { path: "parish-team", Component: ParishTeam },
        { path: "programs", Component: Programs },
        { path: "ministries", Component: Ministries },
        { path: "media", Component: Media },
        { path: "contact", Component: Contact },
        { path: "*", Component: NotFound },
      ],
    },
  ],
  { basename },
);
