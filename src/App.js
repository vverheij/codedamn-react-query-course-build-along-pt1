import './App.css';
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Post from './Post'
import client from './react-query-client'
// import { Link } from 'react-router-dom'

const fetcher = (url) => fetch(url).then(res => res.json())

function App() {
  const [postID, setPostID] = useState(null)
  // const [state, setState] = useState(false)

  const { isLoading, data: posts, error } = useQuery('posts',
    () => fetcher('https://jsonplaceholder.typicode.com/posts'),
    { enabled: true })

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (postID !== null) {
    // return <h2>the id:{postID}</h2>
    return <Post postID={postID} goBack={(() => setPostID(null))} />
  }

  console.log({ posts, error })

  // const cachedPost = client.getQueryData(['post', 5])
  // console.log('cached post? ', { cachedPost })

  return (
    <div className="App">
      <div className="App-header">
        {/*<button onClick={() => setState(state => !state)}>Fetch Posts</button>*/}
        {posts && posts.map(post => {
          const cachedPost = client.getQueryData(['post', post.id])
          console.log('cached post? ', { cachedPost })

          return <div key={post.id}>
            <button onClick={() => setPostID(post.id)}>id: {post.id} - {post.title} - {cachedPost ? 'visited' : ''}</button>
          </div>
        })}
      </div>
    </div >
  )
}


// function App() {
//   const cachedPost = client.getQueryData(['single-post', 5])
//   console.log('cached post: ', { cachedPost })

//   return (
//     <div className="App">
//       <div className="App-header">
//         <Button />
//       </div>
//     </div>
//   )

// }

// let globalID = 0;

// const arr = [{todo: "mehul", id: 1 }, {todo: "john", id: 2 }, {todo: "amber", id: 3 }]
// function App() {
//   const [task, setTask] = useState('')
//   const [todos, setTodos] = useState([])

//   const createTodo = (e) => {
//     e.preventDefault();
//     setTodos(oldTodos => {
//       setTask('')
//       return [...oldTodos, {todo: task, id: oldTodos.length + 1 }]
//     })
//   }

//   const handleClick = (id) => {
//     const filterFn = (oldTodos) => oldTodos.filter(item => item.id !== id)
//     setTodos(filterFn)
//   }

//   return (
//     <div>
//       <h1>Best todo app ever!</h1>
//       <form onSubmit={createTodo}>
//         <input type="text"
//           // onKeyDown={tryEnter}
//           value={task}
//           onChange={(e) => setTask(e.target.value)} />
//         <button type="submit">Create Todo</button>
//       </form>
//       <ul>
//         {todos.map((item, index) => {
//           return (
//             <div key={item.id}>
//               <li key={item.id}>{item.id}/{index}: {item.todo}</li>
//               <button onClick={() => handleClick(item.id)}>Delete</button>
//             </div>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

export default App;
