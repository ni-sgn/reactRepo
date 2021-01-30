import React, { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, [])

  return (
    <div className='container-fluid'>
      {posts &&
        posts.map((item) => (
          <div className='card mb-2' key={item.id}>
            <div className='card-body'>{item.title}</div>
          </div>
        ))}
    </div>
  )
}
