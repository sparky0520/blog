import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const Delete = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  function handleSubmit() {
    axios 
      .delete(`${import.meta.env.VITE_backendURL+id}`)
      .then(() => {
        console.log("Blog Deleted Successfully")
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        alert("Error deleting blog. Check Console.")
      })
  }
  return (
    <div>
      <h1 className='text-3xl font-bold my-20 text-center'>Do you really want to delete this blog ?</h1>
      <div className='flex justify-center'>
        <button
          onClick={handleSubmit}
          className='border-2 border-red-600 rounded-lg p-1 text-red-600 hover:bg-red-600 hover:text-white transition'>Yes, Delete</button>
      </div>
    </div>
  )
}

export default Delete 