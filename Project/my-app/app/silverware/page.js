import React from "react";
import Image from "next/image";
import Background7 from "./../../public/img/messi7.jpeg";
import Searchbar from "@/components/Searchbar";

const page = () => {
  return (
    <div>
      <Searchbar />
      <Image
        src={Background7}
        alt="background image"
        className="mt-5 w-[100%] h-auto"
      />
    </div>
  );
};

export default page;
