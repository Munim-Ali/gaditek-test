import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface CardProps {
  children: ReactNode;
  className?: string;
  heading?: string;
  date?: string;
  details: string;
}
const MainCard = ({
  children,
  className,
  heading,
  date,
  details,
}: CardProps) => {
  return (
    <>
      <div
        className={`${className} w-full bg-white main-card-shadow p-[30px] rounded-lg mt-8`}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-baseline justify-start">
            <h1 className="text-[20px] lg:text-[36px] font-poppins font-medium text-black">
              {heading}
            </h1>
            <p className="font-poppins text-[14px] lg:text-[20px] font-normal text-[#707070] ml-5">
              {date}
            </p>
          </div>
          <Link to={details}>
            <p className="font-poppins text-[14px] lg:text-[20px] text-black font-medium hover:text-red">
              See Details
            </p>
          </Link>
        </div>
        {children}
      </div>
    </>
  );
};

export default MainCard;
