import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5555/blogs/")
            .then(res => {
                console.log('Data fetched Successfully')
                setBlogs(res.data.data)
            })
            .catch(err => {
                console.log("Error Fetching all Blogs.")
                alert("Error fetching all blogs. Check Console.")
            })
    }, [])
    // Empty dependency array ensures that effect runs only once after mounting

    return (
        <>
            <h1 className='text-4xl my-10 font-bold text-center'>Home Page</h1>
            <div>
                {blogs.map((blog, index) => (
                    <div key={blog._id} className="my-3 border-2">
                        <h1 className='text-lg font-semibold text-center my-4'>{blog.title} <Link to={`/delete/${blog._id}`} className="float-right mr-4 text-sm text-red-600">del</Link></h1>
                        <div className="flex">
                            <div className="float-left mx-2 mb-4">
                                <img src={blog.imageURL} alt="Blog Image" className=" max-h-64 max-w-64" />
                            </div>
                            <div>
                                <p>
                                    {blog.content}<br></br>
                                    <span className='float-right mr-5 mb-1 text-gray-600'>-{blog.author}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home