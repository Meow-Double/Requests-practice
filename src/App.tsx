import React from 'react';
import './App.css'
import { userService } from './api/axios/entities/users'

function App() {

  const request = new userService();
  const [users, setUsers] = React.useState<User[]>([])
  
  React.useEffect(() => {
    request.getUsers().then(res => setUsers(res.data))
  }, [])
  
  console.log(users)

  return (
    <>
      <span>
        Practice requests
      </span>
    </>
  )
}

export default App
