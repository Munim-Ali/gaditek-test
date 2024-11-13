import { Link } from "react-router-dom";
import Toggle from "../assets/icons/Togglenav.svg";
import userProfile from "../assets/images/userimage.png";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <>
      <section className="w-full flex flex-row items-center justify-between header-shadow pr-6">
        <img
          src={Toggle}
          className="w-auto h-auto cursor-pointer"
          onClick={toggleSidebar}
        />
        <Link
          to={"/login"}
          className="flex flex-row items-center justify-center"
        >
          <img src={userProfile} className="w-[50px] h-[50px]" />
          <p className="text-black font-poppins text-[16px] font-normal">
            Shan
          </p>
        </Link>
      </section>
    </>
  );
};

export default Header;
