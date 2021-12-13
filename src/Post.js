import React from 'react'
import { useQuery } from 'react-query'


const fetcher = (url) => fetch(url).then(res => res.json())

export default function Post({ postID, goBack }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postID}`
  console.log(url)
  const { data: post, isLoading, error } = useQuery(['post', postID], () => fetcher(url))

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>
      {error}</h2>
  }

  return (
    <div>
      <h2>PostID: {postID}</h2>
      <h2>Title: {post.title}</h2>
      <p>Body: {post.body}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}
