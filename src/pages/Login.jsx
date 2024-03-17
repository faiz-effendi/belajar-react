import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  return(
    <>
      <form action="">
        <input 
          type="text" 
          placeholder="username"
          />
        <input
          type="text" 
          placeholder="password"
          />
        <input type="submit" />
      </form>
    </>

  )
}

export default Login;