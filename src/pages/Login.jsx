import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if(username == "faiz" && password == "123"){
      navigate(-1, { replace: true }); // -1 untuk kembali ke halaman sebelumnya. '/' untuk kembali ke halaman utama
    } else{
      console.log("username atau password salah")
    }
    
  }
  
  return(
    <>
      <div className="p-5">
        <form onSubmit={submitHandler} className="flex flex-col gap-2">
          <input 
            onChange={(e) => setUsername(e.target.value)}
            type="text" 
            placeholder="username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text" 
            placeholder="password"
          />
          <button className="bg-blue-300 w-24">Login</button>
        </form>
      </div>
    </>

  )
}

export default Login;