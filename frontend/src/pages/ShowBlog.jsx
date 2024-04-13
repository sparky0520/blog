import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShowBlog = () => {
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [imageURL, setImageURL] = useState()
    const [content, setContent] = useState()

    useEffect(() => {
        axios
            .get(`https://blog-4ctn.onrender.com/blogs/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setImageURL(res.data.imageURL)
                setContent(res.data.content)
                console.log("Blog fetched successfully")
            })
            .catch(err => {
                console.log("Error occurred fetching blog. Check Console.")
            })
    }, [])

    const { id } = useParams()
    return (
        <>
            <div className='mt-20 font-bold text-3xl text-center'>{title}</div>
            <div className='text-right mr-5 mb-1 text-gray-600 mb-20'>-{author}</div>
            <div className='flex justify-center'>
                <img src={imageURL} alt="Blog Image" className='w-full h-auto lg:w-2/3 xl:w-1/2 rounded-lg md:mx-1 lg:mx-0' />
            </div>
            <p className='my-10 text-lg text-gray-800 md:mx-1 lg:mx-0'>{content}</p>
        </>
    )
}

export default ShowBlog