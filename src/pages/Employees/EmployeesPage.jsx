import Layout from "../../components/Layout";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';
import { TableSimple } from "../../components/TableSimple.jsx";
import SearchInput from "../../components/SearchInput";
import {useEffect, useState} from "react";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/user/employees');
        if (!res.ok) {
          throw Error('Network response was not ok');
        }
        const employeesData = await res.json();
        setEmployees(employeesData.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (

    <Layout>
      <section className="border border-solid border-[#A2A1A833] rounded-[10px] p-5">
        <div className="flex items-center justify-between mb-6">
          <SearchInput />
          <div className="flex items-center gap-x-5">
            <Link to={`/add-employee`}>
              <Button icon={"plus-icon"}>Add New Employee</Button>
            </Link>
            <Button
              icon={"sort-icon"}
              className="!text-[#16151C] !bg-white !border !border-[#A2A1A833] rounded-[10px]">
              Filter
            </Button>
          </div>
        </div>
        <TableSimple employeesData={employees}/>
      </section>
    </Layout>
  );
};

export default Employee;
