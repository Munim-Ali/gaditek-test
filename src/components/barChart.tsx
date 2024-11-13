import { useState } from "react";
import { BarChart, Bar, Tooltip, Cell } from "recharts";

interface ExposureData {
  metric: string;
  total: number;
  pnl: number;
}

const ExposureChart = ({ exposureData }: { exposureData: ExposureData[] }) => {
  const [focusBar, setFocusBar] = useState(null);

  return (
    <div className="border-4 border-[#FF9797] rounded-md">
      <BarChart width={350} height={180} data={exposureData}>
        <Tooltip />
        <Bar dataKey="total" fill="#E6E6E6" />
      </BarChart>
    </div>
  );
};

export default ExposureChart;
