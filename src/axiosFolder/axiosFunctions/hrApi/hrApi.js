import axios from '../../configurations/axiosSetup';

export const registerUser = async (body) => {
    try {
      const response = await axios.post("/users/signup", body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  };

  export const loginHR = async(body) => {
    try{
      const response = await axios.post('/admin/login', body, {
        headers: {
        "Content-Type": "application/json"
        }
      })

      return response
    }catch(error){
      return error.response
    }
  }

  export const resendVerification = async(body) => {
    try{
      const response = await axios.post('/users/resendVerification', body, {
        headers: {
        "Content-Type": "application/json"
        }
      })

      return response
    }catch(error){
      return error.response
    }
  }


  export const viewAllEmployees = async() => {
    try{
      const response = await axios.get(`/admin/view-employees`)
      return response
    }catch(error){
      return error.response
    }
  }

  export const currentAttendance = async() => {
    try{
      const response = await axios.get(`/admin/daily-attendance`)
      return response
    }catch(error){
      return error.response
    }
  }

  export const graph = async() => {
    try{
      const response = await axios.get(`/admin/graph-attendance`)
      return response
    }catch(error){
      return error.response
    }
  }

  export const fetchAttendanceHistory = async() => {
    try{
      const response = await axios.get(`/admin/all-attendance`)
      return response
    }catch(error){
      return error.response
    }
  }