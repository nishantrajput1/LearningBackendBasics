import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
const Feed = () => {
     const [posts, setposts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/get-post").then((res)=>{
            console.log(res.data);
            setposts(res.data.post);
            
        })
    },[])

  return (
    <section className='feed-section'>
        {
            posts.length>0?(
                posts.map((post)=>(
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt='' />
                        <p>{post.caption}</p>
                    </div>
                ))
            ):(<h1>No posts available</h1>)
        }
    </section>
  )
}

export default Feed