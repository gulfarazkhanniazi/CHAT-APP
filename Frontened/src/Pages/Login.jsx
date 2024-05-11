import { useState } from "react";
import { Link } from "react-router-dom"
import { logIn } from "../States/UserStates";
import { UseAuthContext } from "../context/userContext";

const Login = () => {
    const { setAuthUser } = UseAuthContext()
    const [error, setError] = useState("")
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    
    const handleOnSubmit = async(e) => {
        e.preventDefault();
        await logIn(inputs, setError, setAuthUser);
    }
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop:blur-lg bg-opacity-20">
            <h1 className=" text-3xl font-semibold text-center text-gray-300">
                Login
                <span className=" text-blue-500"> CHATAPP</span>
            </h1>

            <form onSubmit={handleOnSubmit}>
                <div>
                    <label className= "label p-2">
                        <span className=" text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className=" w-full input input-bordered h-10" value={inputs.username} required
                    onChange={(e)=>setInputs({...inputs,username: e.target.value})}/>
                    {error && <p className=" text-red-600 text-center">{error}</p>}
                </div>
                <div>
                    <label className= "label p-2">
                        <span className=" text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className=" w-full input input-bordered h-10" value={inputs.password} required
                    onChange={(e)=>setInputs({...inputs,password: e.target.value})}/>
                </div>
                <Link to="/signup" className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                    {`Don't`} have an account?
                </Link>
                <div>
                    <button className=" btn btn-block btn-sm mt-2">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login