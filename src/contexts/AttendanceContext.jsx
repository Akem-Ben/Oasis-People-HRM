import React, { createContext, useContext, useState } from 'react';
import { currentAttendance, graph, fetchAttendanceHistory } from '../axiosFolder/axiosFunctions/hrApi/hrApi';

const AttendanceContext = createContext('');

export const useAttendance = () => {
    const context = useContext(AttendanceContext);
    if(!context){
        throw new Error('useAttendance must be used within a AttendanceProvider')
    }
    return context
}
export const AttendanceProvider = ({ children } ) => {
    const [dailyAttendance, setDailyAttendance] = useState([])
    const [earlyGraph, setEarlyGraph] = useState([])
    const [lateGraph, setLateGraph] = useState([])
    const [allAttendanceHistory, setAllAttendanceHistory] = useState([])

    const getDailyAttendance = async () => {
        const data = await currentAttendance()
       return setDailyAttendance(data.data.employeesDailyAttendance)
    }

    const getAttendanceHistory = async () => {
        const data = await fetchAttendanceHistory()
        console.log(data)
       return setAllAttendanceHistory(data.data.attendanceHistory)
    }

    const getGraphData = async () => {
        const data = await graph()
        setEarlyGraph(data.data.earlyComersArray)
        return setLateGraph(data.data.lateComersArray)
    }


    return (
        <AttendanceContext.Provider value={{ getDailyAttendance, getAttendanceHistory, allAttendanceHistory, dailyAttendance, getGraphData, earlyGraph, lateGraph }}>
            {children}
        </AttendanceContext.Provider>
    )
}
