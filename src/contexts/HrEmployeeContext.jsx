import React, { createContext, useContext, useEffect, useState } from 'react';
import { viewAllEmployees } from '../axiosFolder/axiosFunctions/hrApi/hrApi';

const EmployeeContext = createContext('');

export const useEmployee = () => {
    const context = useContext(EmployeeContext);
    if(!context){
        throw new Error('useEmployee must be used within a EmployeeProvider')
    }
    return context
}
export const EmployeeProvider = ({ children } ) => {
    const [allEmployees, setAllEmployees] = useState([])

    const getAllEmployees = async () => {
        const data = await viewAllEmployees()
       return setAllEmployees(data.data.employeesToReturn)
    }

    // const addEmployee = async(body) => {
    //     const data = await createPost(post)
    //     return data
    // }

    // const deleteUserPost = async(id) => {
    //     const data = await deletePost(id)
    //     return data
    // }
    return (
        <EmployeeContext.Provider value={{ allEmployees, setAllEmployees, getAllEmployees }}>
            {children}
        </EmployeeContext.Provider>
    )
}
