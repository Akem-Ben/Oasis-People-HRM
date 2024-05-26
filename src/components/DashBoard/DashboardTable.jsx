// import TableActions from "./TableActions.jsx";
import { useNavigate } from "react-router-dom";
import { allEmployees } from "../../mocks/handlers";

export function DashboardTable({ employeesData }) {
  const navigate = useNavigate();

  const itemList = allEmployees.results.map((employee) => {
    return (
      <>
        <tr
          onClick={() => navigate(`/employee/${employee.id}/`)}
          className="odd:bg-white even:bg-gray-100 bg-blue-500 hover:cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-green-300"
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{`${employee.firstName} ${employee.lastName}`}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.profile[0].employeeId}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.profile[0].department}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.profile[0].designation}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.profile[0].employeeType}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.profile[0].contractType}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            <span className="bg-[#ECF9F3] rounded-lg p-2 text-[#3FC28A]">
              On Time
            </span>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className="flex flex-col mb-20">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table
              border={2}
              className="min-w-full divide-y divide-gray-200 border font-lexend"
            >
              <thead>
                {/*Column Headers */}
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Employee Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Employee ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Designation
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Check In Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              {/*Employee Row Data */}
              <tbody className="bg-green-600 ">{itemList}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
