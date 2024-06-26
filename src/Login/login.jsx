import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(props) {

    const [euser, seteUser]= useState()
    const [puser, setpUser]= useState()
    const [ruser, setrUser]= useState(true)

    const navigate = useNavigate();


    function checkUser(){
        let userfound= false;
        props.user.forEach(function(item){
            if(item.username === euser && item.password === puser){
                //console.log("Login")
                userfound=true
                navigate("/landing", {state:{users:euser}})
            }
        })
        if(!userfound){
            //console.log("failed")
            setrUser(false)
        }
    }
    function handleUser(event){
        seteUser(event.target.value)
    }
    function handlePass(event){
        setpUser(event.target.value)
    }
    return (
        <div className="bg-black p-12">
        <div className="bg-[#efefef] p-10 border rounded-md">
            <h1 className="font-medium text-2xl my-1">Hey Hi</h1>
            {ruser? <p>I help you to manage activity after Login:)</p> :<p className="text-red-600">Please Sign Up before you login:)</p>}
            <input type="text" onChange={handleUser} className=" border-black p-1 bg-transparent border rounded-md my-2" placeholder="username"></input><br></br>
            <input type="password" onChange={handlePass} className="border border-black p-1 bg-transparent rounded-md my-2" placeholder="password"></input><br></br>
            <button onClick={checkUser} className="bg-[#BDB4E4]  border rounded-md py-1 px-4">Login</button>
            <p>Don't have account?<Link className="underline" to={'/signUp'}>signup</Link></p>
        </div>
        </div>
    )
}

export default Login;