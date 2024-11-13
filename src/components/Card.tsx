import React, { ReactNode } from "react";

type PropType = {
  children: ReactNode;
  className?: string;
};
const Card = ({ children, className }: PropType) => {
  return (
    <>
      <div
        className={`${className} cards-shadow py-[20px] px-[30px] rounded-md mb-4 `}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
