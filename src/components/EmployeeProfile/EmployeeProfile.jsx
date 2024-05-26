import { NavigationTabs } from "./NavigationTabs.jsx";

export default function EmployeeProfile({ employeeDetails }) {

  return (
    <>
      {/* Navigation Tab for Employee Bio Data */}
      <div>
        <NavigationTabs employeeDetails={employeeDetails} />
      </div>
      {/* Employee Bio Data Details Conditioned on Nav Tab */}
    </>
  )
}