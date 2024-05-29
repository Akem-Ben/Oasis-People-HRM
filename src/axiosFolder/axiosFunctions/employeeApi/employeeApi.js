import axios from '../../configurations/axiosSetup'


export const createPost = async(body)=>{
    try{
      const response = await axios.post("/post/create", body,{
        headers: {
            "Content-Type" : "multipart/form-data"
        }
      })
    return response
    }catch(error){
      return error.response
    }
}

export const allPosts = async()=>{
    try{
        const response = await axios.get('/post/allPosts')
        return response
    }catch(error){
        return error.response
      }
}

export const singlePost = async(id)=>{
  try{
    const response = await axios.get(`/post/singlePost/${id}`)
    return response
}catch(error){
    return error.response
  }
}

export const deletePost = async(id)=>{
  try{
    const response = await axios.delete(`/post/deleteUserPost/${id}`)
    return response
    
  }catch(error){
    return error.response
  }
}