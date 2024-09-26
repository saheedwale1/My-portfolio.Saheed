import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home";
import AboutMePage from "./components/AboutMe";
import ProjectsPage from "./components/Project";
import ContactPage from "./components/ContactMe";
import AppLayout from "./components/AppLayout";
import ServicesPage from "./components/Service";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutMePage />,
      },
      {
        path: "/project",
        element: <ProjectsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/service",
        element: <ServicesPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
