import Layout from "../../components/Layout";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import SearchInput from "../../components/SearchInput";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  const allEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5173/api/user/employees"
      );

      return setEmployees(response.data.results);

    } catch (error) {
      console.log(error);
    }
  };

  const goToEmployeeProfile = (id) => {
    return navigate(`/employee/${id}`)
  }

  useEffect(() => {
    allEmployees();
  }, []);

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
          data={employees}
          columns={[
            {
              header: "Employee Name",
              view: (row) => (
                <div onClick={() => goToEmployeeProfile(row.id)} className="font-normal text-xs">
                  <span>
                    {row.firstName} {row.lastName}
                  </span>
                </div>
              ),
            },
            {
              header: "Employee ID",
              view: (row) => (
                <span onClick={() => goToEmployeeProfile(row.id)} className="font-normal text-xs capitalize">
                  {row.profile[0]?.employeeId}
                </span>
              ),
            },
            {
              header: "Department",
              view: (row) => (
                <span onClick={() => goToEmployeeProfile(row.id)} className="font-normal text-xs">
                  {row.profile[0]?.department}
                </span>
              ),
            },
            {
              header: "Designation",
              view: (row) => (
                <span onClick={() => goToEmployeeProfile(row.id)} className="font-normal text-xs">
                  {row.profile[0]?.designation}
                </span>
              ),
            },
            {
              header: "Type",
              view: (row) => (
                <span onClick={() => goToEmployeeProfile(row.id)} className="font-normal text-xs">
                  {row.profile[0]?.employeeType}
                </span>
              ),
            },
            {
              header: "Status",
              view: (row) => (
                <span onClick={() => goToEmployeeProfile(row.id)} className="font-normal text-xs">
                  {row.profile[0]?.contractType}
                </span>
              ),
            },
          ]}
          rowActions={
            <div className="flex w-[30%] justify-between">
              <div className="w-[50%] hover:cursor-pointer">
                <CiEdit className="w-[100%]" />
              </div>{" "}
              <div className="hover:cursor-pointer">
                <RiDeleteBin5Line className="w-[100%]" />
              </div>
            </div>
          }
        />
      </section>
    </Layout>
  );
};

export default Employee;
