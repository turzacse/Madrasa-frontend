import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white font-sans">
      <h1 className="text-4xl font-bold mb-4">আমার বাংলা ওয়েবসাইটে স্বাগতম!</h1>
      <p className="text-lg">
        এটি একটি উদাহরণস্বরূপ React অ্যাপ্লিকেশন যা Tailwind CSS ব্যাবহার করে।
      </p>
    </div>
  )
}

export default App
