import Link from "next/link";
import React from "react";

const Button2 = ({
  text,
  link,
  icon,
  href,
}: {
  text: string;
  link?: string;
  icon?: React.ReactNode;
  href?: string;
}) => {
  if (href) {
    return (
      <Link href={href ? href : "#"} className=" ">
        <button className="bg-green-500 font-[500] px-4 py-2 rounded-md hover:bg-green-400 text-black flex flex-row items-center gap-2 justify-center">
          {icon}
          {text}
        </button>
      </Link>
    );
  } else {
    return(
      <button className="bg-green-500 font-[500] px-4 py-2 rounded-md hover:bg-green-400 text-black flex flex-row items-center gap-2 justify-center">
      {icon}
      {text}
    </button>
    )}
};

export default Button2;
