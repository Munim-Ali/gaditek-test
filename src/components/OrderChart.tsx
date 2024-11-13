import { useState } from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  Cell,
  YAxis,
  XAxis,
  CartesianGrid,
  Legend,
} from "recharts";

interface OrderData {
  metric: string;
  total: number;
  pnl: number;
}

const OrderChat = ({ orderData }: { orderData: OrderData[] }) => {
  return (
    <div className="rounded-md">
      <BarChart width={700} height={400} data={orderData}>
        <XAxis dataKey="metric" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#E6E6E6" />
      </BarChart>
    </div>
  );
};

export default OrderChat;
