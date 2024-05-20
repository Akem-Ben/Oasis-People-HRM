import React from "react";
import Layout from "../../components/Layout";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import SearchInput from "../../components/SearchInput";

const Attendance = () => {
  return (
    <Layout>
      <section className="border border-solid border-[#A2A1A833] rounded-[10px] p-5">
        <div className="flex items-center justify-between mb-6">
          <SearchInput />
          
         
        </div>
        <Table
          data={[1, 2, 3, 4, 5]}
          columns={[
            {
              header: "Employee Name",
              view: (row) => (
                <div className="font-normal text-xs">
                  <span>kkk</span>
                </div>
              ),
            },
            
            {
              header: "Designation",
              view: (row) => <span className="font-normal text-xs">kkk</span>,
            },
            {
              header: "Type",
              view: (row) => <span className="font-normal text-xs">kkk</span>,
            },
            {
                header: "Check in Time",
                view: (row) => <span className="font-normal text-xs">kkk</span>,
              },
            {
              header: "Status",
              view: (row) => <span className="font-normal text-xs">kkk</span>,
            },
          ]}
         
        />
      </section>
    </Layout>
  );
};

export default Attendance;
