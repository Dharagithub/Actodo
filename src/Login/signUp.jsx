import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Signup(props){
    const navigate =useNavigate()
    const user= props.user
    const setUser= props.setUser

    const [euser, seteUser]= useState()
    const [puser, setpUser]= useState()

    function handleUser(event){
        seteUser(event.target.value)
    }
    function handlePass(event){
        setpUser(event.target.value)
    }

    function addUser(){
        console.log(user)
        setUser([...user,{username:euser, password:puser}])
        navigate("/")
    }

    return(
            <div className="bg-black p-12">
            <div className="bg-[#efefef] p-10 border rounded-md">
                <h1 className="font-medium text-2xl my-1">Hey Hi</h1>
                <p>Sign Up here:)</p>
                <input type="text" onChange={handleUser} className="border border-black p-1 bg-transparent rounded-md my-2" placeholder="username"></input><br></br>
                <input type="password" onChange={handlePass} className="border-black p-1 bg-transparent border rounded-md my-2" placeholder="password"></input><br></br>
                <input type="password" className="border-black p-1 bg-transparent border rounded-md my-2" placeholder="confirm password"></input><br></br>
                <button onClick={addUser} className="bg-orange-400  border rounded-md py-1 px-4">Sign up</button>
                
                <p>Already have account?<Link className='underline' to={'/'}>Login</Link></p>
            </div>
        </div>
    )
}

export default Signup;