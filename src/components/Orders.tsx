import MainCard from "./mainCard";
import data from "../data.json"; // Import the single JSON file
import { OrderMetric, FullData } from "../lib/type";
import Card from "./Card";
import OrderChat from "./OrderChart";
import { useEffect, useState } from "react";

const fullData = data as unknown as FullData;

const Orders = () => {
  const { orders } = fullData.metrics;
  const [orderData, setOrderData] = useState<OrderMetric[]>([]);

  useEffect(() => {
    return setOrderData(orderData);
  }, []);
  return (
    <>
      <MainCard heading="Sales" date="Jan 28,2022 to Feb 3, 2022" details="/">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mt-8">
          {orders.map((metric, index) => (
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
        <OrderChat orderData={orderData} />
      </MainCard>
    </>
  );
};

export default Orders;
