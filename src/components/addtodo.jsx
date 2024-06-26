import { useState } from "react";

function AddTodo(props) {

   const activityArr = props.activityArr
   const setActivityArr = props.setActivityArr

   const [newActivity,setNewactivity] = useState("")

   function handleChange(event){
    setNewactivity(event.target.value)
   }

   function addActivity(){
   
    setActivityArr([
        ...activityArr,
        { id: activityArr.length + 1, activity: newActivity }
    ]);
    setNewactivity("")
   }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>

            <div>
                <input value={newActivity} onChange={handleChange} className="border border-black bg-transparent p-1" placeholder="Next activity?" />
                <button onClick={addActivity} className="bg-black text-white border border-black p-1">Add</button>
            </div>
        </div>
    )
}

export default AddTodo;