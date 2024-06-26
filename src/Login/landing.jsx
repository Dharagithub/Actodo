//import { useLocation } from "react-router-dom";
import Card from "../components/card";
import Header from "../components/header";
import Todo from "../components/todo";


function Landing(){
    //const data= useLocation()
    // const { store } = data.state || {}; 
    // const userName = store && store.users ? store.users : "";
    return(
        <div>
            <div className="bg-black p-12">
      <div className="bg-[#efefef] p-10 border rounded-md">
        <Header/>
        <div className="flex flex-wrap justify-between gap-10 my-5">
          <Card bgcolor={"#8272DA"} title={23} subtitle={"Chennai"}/>
          <Card bgcolor={"#FD6663"} title={"June"} subtitle={"20:44:40"}/>
          <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}/>
        </div>
        <Todo/>
      </div>
      
    </div>
        </div>
    )
}

export default Landing;