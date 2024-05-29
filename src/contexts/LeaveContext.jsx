import React, { createContext, useContext, useState } from 'react';
import { fetchLeaveHistory} from '../axiosFolder/axiosFunctions/hrApi/hrApi';

const LeaveContext = createContext('');

export const useLeave = () => {
    const context = useContext(LeaveContext);
    if(!context){
        throw new Error('useLeave must be used within a LeaveProvider')
    }
    return context
}
export const LeaveProvider = ({ children } ) => {
    const [getLeaveHistory, setGetLeaveHistory] = useState([])
    // const [earlyGraph, setEarlyGraph] = useState([])
    // const [lateGraph, setLateGraph] = useState([])
    // const [allAttendanceHistory, setAllAttendanceHistory] = useState([])

    const getAllLeave = async () => {
        const data = await fetchLeaveHistory()
        console.log(data)
       return setGetLeaveHistory(data.data.finalLeaveDetails)
    }
    // const getAttendanceHistory = async () => {
    //     const data = await fetchAttendanceHistory()
    //     console.log(data)
    //    return setAllAttendanceHistory(data.data.attendanceHistory)
    // }

    // const getGraphData = async () => {
    //     const data = await graph()
    //     setEarlyGraph(data.data.earlyComersArray)
    //     return setLateGraph(data.data.lateComersArray)
    // }


    return (
        <LeaveContext.Provider value={{ getLeaveHistory, getAllLeave }}>
            {children}
        </LeaveContext.Provider>
    )
}
