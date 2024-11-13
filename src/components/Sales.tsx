import MainCard from "./mainCard";
import salesimg from "../assets/images/sales.png";
import data from "../data.json"; // Import the single JSON file
import { FullData } from "../lib/type";
import Card from "./Card";

const fullData = data as unknown as FullData;

const Sales = () => {
  const { sales } = fullData.metrics;

  return (
    <>
      <MainCard heading="Sales" date="Jan 28,2022 to Feb 3, 2022" details="/">
        <div className="flex flex-col items-start justify-between">
          <img src={salesimg} className="mt-8" />
          <div className="w-full flex flex-col lg:flex-row items-center justify-between mt-8">
            {sales.map((metric, index) => (
              <Card key={index} className="w-full lg:w-[25%] mr-4">
                <p className="text-[16px] font-normal font-poppins text-black ">
                  {metric.metric}
                </p>
                <p className="font-poppins font-medium text-[24px] text-black my-4">
                  {metric.total.toLocaleString()}
                </p>
                <div className="flex flex-row items-center justify-start">
                  <p
                    className={`${
                      metric.pnl > 0
                        ? "bg-[#01BB5333] text-[#40A142]"
                        : "bg-[#BB010133] text-[#FF4949]"
                    } text-[14px] font-normal px-1 rounded-md`}
                  >
                    {metric.pnl > 0 ? "+" : "-"}
                    {metric.pnl}%
                  </p>
                  <p className="text-[#707070] text-[14px] ml-2">
                    Since Last Week
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MainCard>
    </>
  );
};

export default Sales;
