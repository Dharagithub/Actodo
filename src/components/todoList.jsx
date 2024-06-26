//import { useState } from "react";
import TodoItem from "./todoitem";

function AddTodoList(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return (
        <div className="bg-[#BDB4E4]  border rounded-md flex-grow p-1">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArr.length === 0 ? <p>You haven't add any activity yet</p> : ""}
            {activityArr.map((item, index) => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    index={index}
                    activity={item.activity}
                    activityArr={activityArr}
                    setActivityArr={setActivityArr}
                />
            ))}

        </div>
    )
}

export default AddTodoList;