import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Page } from "../constants";
import Dashboard from "../pages/dashboard";
type LayoutProps = {
  page: Page;
};
const Layout = ({ page }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setIsSidebarOpen(!isMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  const getPage = () => {
    switch (page) {
      case Page.Dashboard:
        return <Dashboard />;
    }
  };
  return (
    <>
      <div className="h-screen w-full overflow-x-hidden bg-mainBlack ">
        <div className=" flex flex-row items-start justify-start">
          <Sidebar page={page} isOpen={isSidebarOpen} />
          <div className="flex-1 h-full">
            <Header toggleSidebar={toggleSidebar} />
            <div className="w-full overflow-x-hidden h-auto px-[40px] py-[30px]">
              {getPage()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
