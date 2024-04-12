import React from 'react'

const Delete = () => {
  function handleSubmit() {

  }
  return (
    <div>
      <h1 className='text-3xl font-bold my-20 text-center'>Do you really want to delete this blog ?</h1>
      <div className='flex justify-center'>
        <button
          onClick={handleSubmit}
          className='border-2 border-red-600 rounded-lg p-1 text-red-600'>Yes, Delete</button>
      </div>
    </div>
  )
}

export default Delete 