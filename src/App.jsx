import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './UserList'
import { AddUser } from './AddUser'

function App() {
  const [users, setUsers] = useState([])
  const addUser = obj=>{
    setUsers([...users,{...obj,id:Date.now()}])
  }


  return (
    <>
      <UserList users = {users} />
      <AddUser onAdd = {addUser} users = {users}/>
    </>
  )
}

export default App
