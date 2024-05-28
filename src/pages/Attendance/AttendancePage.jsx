import Layout from "../../components/Layout";
import { Table } from "../../components/Table";
import SearchInput from "../../components/SearchInput";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Status from "../../components/Status";

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/user/attendance");
        if (!res.ok) {
          throw Error("Network response was not ok");
        }
        const attendanceData = await res.json();
        console.log(attendanceData.results);
        setAttendance(attendanceData.results.attendance);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
console.log(attendance,'attendance');
  return (
    <Layout>
      <section className="border border-solid border-[#A2A1A833] rounded-[10px] p-5">
        <div className="flex items-center justify-between mb-6">
          <SearchInput />
        </div>
        <Table
        loading={false}
          tableData={attendance}
          columns={[
            {
              header: "Employee Name",
              view: (row) => (
                <div className="flex gap-x-3 items-center"> 
                  <span className="inline-block w-9 h-9 rounded-full"><img src="/icons/oasis-logo.png" alt="" className="h-full w-full rounded-full " /></span>
                  <span>{row.firstName} {row.lastName}</span>
                </div>
              ),
            },

            {
              header: "Designation",
              view: (row) => <span>{row.designation}</span>,
            },
            {
              header: "Type",
              view: (row) => <span>{row.type}</span>,
            },
            {
              header: "Check in Time",
              view: (row) => <span>{dayjs(row.clockIn).format('hh:mm A')}</span>,
            },
            {
              header: "Status",
              view: (row) => <Status status={row.status}/>,
            },
          ]}
        />
      </section>
    </Layout>
  );
};

export default Attendance;
