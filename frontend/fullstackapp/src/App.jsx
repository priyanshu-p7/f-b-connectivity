import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })
  return (
    <>
     <h1>Hello from frontend</h1>
     <p>JOKES:{jokes.length}</p>

     {
      jokes.map((joke,index) =>(
        <div key={joke.id} >
          <h2>{joke.tittle}</h2>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
