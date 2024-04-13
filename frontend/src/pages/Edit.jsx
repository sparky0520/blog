import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const Edit = () => {

  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [imageURL, setImageURL] = useState()
  const [content, setContent] = useState()

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=> {
    axios
      .get(`http://localhost:5555/blogs/${id}`)
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
  },[])

  function handleSubmit() {
    const blog = {
      title,
      author,
      imageURL,
      content
    }
    axios
      .put(`http://localhost:5555/blogs/${id}`, blog)
      .then(() => {
        console.log("Blog Edited Successfully")
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        alert('Error Posting Data to Server. Check Console.')
      })
  }

  return (
    <>
      <div className='text-3xl font-bold my-20 text-center'>Edit this blog</div>
      <div className="mt-4">
        <label className=''>Title</label>
        <br></br>
        <input
          className='border-2 rounded-lg p-1'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)} />
      </div>
      <br></br>
      <div className="">
        <label>Author</label>
        <br></br>
        <input
          className='border-2 rounded-lg p-1'
          type='text'
          value={author}
          onChange={e => setAuthor(e.target.value)} />
      </div>
      <br></br>
      <div className="">
        <label>Image URL</label>
        <br></br>
        <input
          className='border-2 rounded-lg p-1'
          type='text'
          value={imageURL}
          onChange={e => setImageURL(e.target.value)} />
      </div>
      <br></br>
      <div className="">
        <label>Content:</label>
        <br></br>
        <textarea rows={10} cols={30}
          className='border-2 rounded-lg p-1'
          type='text'
          value={content}
          onChange={e => setContent(e.target.value)} />
      </div>
      <div>
        <button
          className='border-2 my-3 rounded-lg p-1 hover:bg-black hover:text-white transition hover:border-black'
          onClick={handleSubmit}
        >Submit</button>
      </div>
    </>
  )
}

export default Edit




