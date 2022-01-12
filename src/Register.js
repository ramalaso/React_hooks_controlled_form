import React, { useState } from 'react'

const initialState = {
      username: "",
      email: "",
      password: ""
   }

export default function Register() {
   const [form, setForm] = useState(initialState);

   const [user, setUser] = useState(null)

   const handleChange = event => {
      setForm({
         ...form,
         [event.target.name] : event.target.value
      })
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setUser(form)
      setForm(initialState)
      
   }

   return (
       <div style={{
         textAlign: 'center'
         }}>

         <h2>Register</h2>
         <form onSubmit={handleSubmit} style={{display: "grid", alignItems: "center", justifyContent:"center"}}>
            <input type="text" placeholder='Username' name='username' onChange={handleChange} value={form.username}/>
            <input type="email" placeholder='Email Address' name='email' onChange={handleChange} value={form.email}/>
            <input type="text" placeholder='Password' name='password' onChange={handleChange} value={form.password} />
            <button type="submit">Submit</button>
         </form>
         {user && JSON.stringify(user, null, 2)}
      </div>
   )
}
