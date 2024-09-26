import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const AppLayout = () => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
