import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/Navbar";
import DashboardCard from "../../components/DashBoard/Card";
import { IoIosPeople } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa6";
import Chart from "../../components/DashBoard/Chart";
import DashboardTable from "../../components/DashBoard/DashboardTable";

function DashboardPage() {
  return (
    <div className="pr-4">
      <section className="px-6 py-2 lg:ml-[290px] flex flex-wrap gap-10 md:ml-[290px] sm:ml-0">
        <DashboardCard
          titleImg={IoIosPeople}
          title="Total Employees"
          data="560"
          figureImg={FaRegCalendarCheck}
          percentage="12%"
          figBg="bg-[#EAF9F3]"
          figTxtCol="text-[#30BE82]"
          date="January 5, 2024"
        />
        <DashboardCard
          titleImg={FaRegCalendarCheck}
          title="Total Attendance Today"
          data="470"
          figureImg={FaRegCalendarCheck}
          percentage="8%"
          figBg="bg-[#FEEFF0]"
          figTxtCol="text-[#F45B69]"
          date="January 7, 2024"
        />
      </section>
      <section className="lg:ml-[290px] px-6 py-2 flex md:ml-[290px] sm:ml-0">
        <Chart />
      </section>
      <section className="lg:ml-[290px] px-6 py-2 flex md:ml-[290px] sm:ml-0">
        <DashboardTable />
      </section>
    </div>
  );
}

export default DashboardPage;
