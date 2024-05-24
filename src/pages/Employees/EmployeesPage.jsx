import Layout from "../../components/Layout";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import SearchInput from "../../components/SearchInput";

const Employee = () => {
  return (

    <Layout>
      <section className="border border-solid border-[#A2A1A833] rounded-[10px] p-5">
        <div className="flex items-center justify-between mb-6">
          <SearchInput />
          <div className="flex items-center gap-x-5">
            <Button icon={"plus-icon"}>Add New Employee</Button>
            <Button
              icon={"sort-icon"}
              className="!text-[#16151C] !bg-white !border !border-[#A2A1A833] rounded-[10px]"
            >
              Filter
            </Button>
          </div>
        </div>
        <Table
          showActionName={true}
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
              header: "Employee ID",
              view: (row) => (
                <span className="font-normal text-xs capitalize">lll</span>
              ),
            },
            {
              header: "Department",
              view: (row) => <span className="font-normal text-xs">kkk</span>,
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
              header: "Status",
              view: (row) => <span className="font-normal text-xs">kkk</span>,
            },
          ]}
          rowActions={<div>hey</div>}
        />
      </section>
    </Layout>
  );
};

export default Employee;
