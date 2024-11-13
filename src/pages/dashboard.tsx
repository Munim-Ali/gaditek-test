import Exposure from "../components/Exposure";
import Filters from "../components/Filters";
import Orders from "../components/Orders";
import Sales from "../components/Sales";

const Dashboard = () => {
  return (
    <>
      <section className="w-full h-full">
        <Filters />
        <Exposure />
        <Sales />
        <Orders />
      </section>
    </>
  );
};

export default Dashboard;
