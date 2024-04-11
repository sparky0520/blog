import axios from 'axios'
import React, { useState, useEffect } from 'react'

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
            })
    }, [])
    // Empty dependency array ensures that effect runs only once after mounting

    return (
        <>
            <h1 className='font-bold mx-auto'>Home Page</h1>
            <div>
                {blogs.map((blog, index) => (
                    <div key={blog._id} className="my-3 border-2">
                        <h1>{blog.title}</h1>
                        <div className='flex gap-3'>
                            <img src={blog.imageURL} />
                            <p>{blog.author} <br /> {blog.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home