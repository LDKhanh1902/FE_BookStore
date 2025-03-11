import { useState, useEffect } from 'react'
import './App.css'
import { GetAuthors } from "./Services/AuthorService"
function App() {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    fecthData();
  }
    , [])

  const fecthData = async () => {
    const data = await GetAuthors();
    setAuthors(data);
  }
  return (
    <>
      <div>
        <h1>List Authors</h1>
        {authors.length > 0 ? (
          authors.map((a) => (
            <div key={a.authorId}>{a.name}</div>
          ))
        ) : (
          <p>No authors found.</p>
        )}
      </div>
    </>
  )
}

export default App
