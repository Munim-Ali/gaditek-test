import Card from "./Card";
import MainCard from "./mainCard";
import data from "../data.json"; // Import the single JSON file
import { ExposureMetric, FullData } from "../lib/type";
import ExposureBarChart from "./barChart";
import { useEffect, useState } from "react";

const fullData = data as unknown as FullData;

const Exposure = () => {
  const { exposure } = fullData.metrics;
  const [exposureData, setExposureData] = useState<ExposureMetric[]>([]);

  useEffect(() => {
    return setExposureData(exposure);
  }, []);
  return (
    <>
      <MainCard
        heading="Exposure"
        date="Jan 28,2022 to Feb 3, 2022"
        details="/"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full lg:w-[60%] mt-8">
            <div className="flex flex-col lg:flex-row items-center justify-start flex-wrap">
              {exposure.map((metric, index) => (
                <Card key={index} className="w-full lg:w-[40%] mr-4">
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
          <ExposureBarChart exposureData={exposureData} />
        </div>
      </MainCard>
    </>
  );
};

export default Exposure;
