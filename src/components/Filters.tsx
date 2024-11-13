import { useState } from "react";
import welcome from "../assets/images/welcome.png";
import filter from "../assets/icons/filter.svg";
import refresh from "../assets/icons/refresh.png";
type FilterOption = "today" | "2d" | "3d" | "1w";

const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("today");

  const contentMap: Record<FilterOption, string> = {
    today: "Showing content for Today.",
    "2d": "Showing content for the last 2 days.",
    "3d": "Showing content for the last 3 days.",
    "1w": "Showing content for the last week.",
  };

  // Handle filter change
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value as FilterOption);
  };
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:w-[300px] flex flex-row items-start justify-between bg-[#FCE1E7] p-[20px] rounded-lg">
          <h2 className="text-red font-poppins text-[16px] font-semibold">
            Welcome Back, Sarmad
          </h2>
          <img src={welcome} />
        </div>
        <div className=" w-full lg:w-auto flex flex-row items-start justify-start mt-8 lg:mt-0">
          <div>
            {/* <img src={calendar} /> */}
            <select
              id="timeFilter"
              value={selectedFilter}
              onChange={handleFilterChange}
              className="px-4 py-2 border rounded-md text-gray-800"
            >
              <option value="today">Today</option>
              <option value="2d">Last 2 Days</option>
              <option value="3d">Last 3 Days</option>
              <option value="1w">Last Week</option>
            </select>
          </div>
          <div className="w-[32px] h-[32px] flex items-center justify-center bg-red mx-4">
            <img src={filter} />
          </div>
          <div className="w-[32px] h-[32px] flex items-center justify-center bg-red ">
            <img src={refresh} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;
