import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/message') // This will work in production when served via the backend
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error('Error fetching:', err)
        setMessage('Error connecting to backend')
      })
  }, [])

  return (
    <div>
      <h1>React Frontend</h1>
      <p>{message}</p>
    </div>
  )
}

export default App

