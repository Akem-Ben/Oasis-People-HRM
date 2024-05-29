import Layout from "../../components/Layout";
import { Table } from "../../components/Table";
import SearchInput from "../../components/SearchInput";
import { useEffect } from "react";
import { useAttendance } from "../../contexts/AttendanceContext";
import { Button } from "../../components/Button";
import {TableSimple} from '../../components/TableSimple';
import {LeaveTable} from '../../components/Leave/LeaveTable';
import { useLeave } from "../../contexts/LeaveContext";

const AllLeaves = () => {

  const {getAttendanceHistory, allAttendanceHistory} = useAttendance()

  const { getLeaveHistory, getAllLeave } = useLeave()

  useEffect(() => {
    getAllLeave()
  }, []);
  return (
    <Layout> 
      <section className="border border-solid border-[#A2A1A833] rounded-[10px] p-5">
        <div className="flex items-center justify-between mb-6">
        </div>
        <div className="font-bold text-[#7152F3]"><em>All Employees are Entitled to a maximum of 21 days of Leave a Year!</em></div>
        <LeaveTable employeesData={getLeaveHistory}/>
      </section>
    </Layout>
  );
};

// dayjs(row.clockIn).format('hh:mm A')
export default AllLeaves;
