import { useNavigate } from "react-router-dom";
import { Page, PageDetails, Pages } from "../constants";
import { useState } from "react";

type SidebarProp = {
  page: Page;
  isOpen: boolean;
};

const Sidebar = ({ page, isOpen }: SidebarProp) => {
  const navigate = useNavigate();
  const [hoveredMainIndex, setHoveredMainIndex] = useState<number | null>(null);

  return (
    <>
      <section
        className={`${isOpen ? "flex" : "hidden"}  pt-20 h-screen px-[20px]`}
      >
        <div className="mt-[22px] w-full flex flex-col items-center justify-start">
          {Object.keys(Pages).map((item, index: number) => {
            const _page = Number(item) as Page;
            const pageDetails = Pages[_page] as PageDetails;

            return (
              <div
                className={`w-full flex flex-row items-center justify-start  px-[8px] py-[11px] cursor-pointer`}
                key={index}
                onMouseEnter={() => setHoveredMainIndex(index)}
                onMouseLeave={() => setHoveredMainIndex(null)}
                onClick={() => navigate(`/${pageDetails.route}`)}
              >
                <img
                  src={
                    hoveredMainIndex === index || _page === page
                      ? pageDetails.hoverIcon
                      : pageDetails.icon
                  }
                  alt={pageDetails.title}
                  className="w-5 h-5"
                />
                <p
                  className={`${
                    isOpen ? "block" : "hidden"
                  } duration-300 text-[16px] font-poppins font-normal ml-4 group-hover:text-red ${
                    _page === page ? "text-red" : "text-[#707070] "
                  }`}
                >
                  {pageDetails.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
