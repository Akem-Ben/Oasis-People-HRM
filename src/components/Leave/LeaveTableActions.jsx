

export default function LeaveTableActions({ employeeId }) {
  return (
    <div className="flex items-center justify-between gap-2 text-lg font-semibold border-transparent text-gray-800
      disabled:opacity-50 disabled:pointer-events-none">
<button className="border rounded-lg p-3 text-white text-xs bg-green-700 hover:cursor-pointer hover:bg-white hover:text-green-700">Approve</button>
<button className="border rounded-lg p-3 text-white text-xs bg-red-700 hover:cursor-pointer hover:bg-white hover:text-red-700">Reject</button>
</div>
  )
}