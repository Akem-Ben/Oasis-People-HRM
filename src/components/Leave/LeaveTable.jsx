import LeaveTableActions from "./LeaveTableActions";

export function LeaveTable({ employeesData }) {

  const itemList = employeesData.map((employee) => {
    return (
      <>
        <tr
          className="odd:bg-white even:bg-gray-100 bg-blue-500 transition-transform duration-200 hover:shadow-lg hover:ring-2 hover:ring-[#7152F3] hover:ring-opacity-50"
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.dateRequested}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium items-center">
            {" "}
            {`${employee.employeeFirstName} ${employee.employeeLastName}`}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.employeeWorkId}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.employeeDepartment}
          </td>
          {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.daysUsed}
          </td> */}
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.daysLeft}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.startDate}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.endDate}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.totalRequestedDays}
          </td>
          {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
            {employee.status}
          </td> */}
          <td className="px-2 py-4 whitespace-nowrap flex justify-between text-end text-sm font-medium">
            {employee.status === 'pending' ? <LeaveTableActions /> : employee.status}
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-y-scroll h-[500px]">
            <table className="min-w-full divide-y divide-gray-200 font-lexend">
              <thead>
                {/*Column Headers */}
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Employee Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Employee ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Department
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Days Used
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Days Left
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    End Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Days Requested
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Status
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Actions
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
