import React, { useState } from 'react'

function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [user, setUser] = useState(null);

   const handleSubmit = (event) => {
      event.preventDefault();
      const userData = {
         username, 
         password
      }
      setUser(userData)
      setUsername("")
      setPassword("")
   }

   return (
      <div style={{
         textAlign: 'center'
      }}>

         <h2>Login</h2>
         <form onSubmit={handleSubmit} style={{display: "grid", alignItems: "center", justifyContent:"center"}}>
            <input type="text" placeholder='Username' onChange={event => setUsername(event.target.value)} value={username}/>
            <input type="text" placeholder='Password' onChange={event => setPassword(event.target.value)} value={password}/>
            <button type="submit">Submit</button>
         </form>
         {console.log(user)}
         {user && JSON.stringify(user, null, 2)}
         
      </div>
   )
}

export default Login
