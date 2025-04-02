import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import EmployeeDetails from './components/EmployeeDetails'
import EditForm from './components/EditForm'
import Post from './components/post'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Nav/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/details/:id" element = {<EmployeeDetails/>}/>
        <Route path = "/editform/:id" element = {<EditForm/>}/>
        <Route path = "/post" element = {<Post/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </>
  )
}

export default App
