import React from "react";
import Corners from "@/components/kursu/corners/Corners";
import CenterTop from "@/components/kursu/center/CenterTop";
import CenterBottom from "@/components/kursu/center/CenterBottom";
import Calendar from "@/components/Sections/RecentWorks/Calendar";

const index = () => {
  return (
    <div className="kursu-outer-lines min-h-screen flex flex-col w-full relative justify-between items-center bg-[#0d0d0d] ">
      <Corners />
      <CenterTop />
      <Calendar /> <CenterBottom />
    </div>
  );
};

export default index;
