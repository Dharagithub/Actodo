import AddTodo from "./addtodo";
import AddTodoList from "./todoList";
import TodoItem from "./todoitem";
import { useState } from "react";

function Todo() {
    const[activityArr, setActivityArr]= useState([
        {
            id:1,
            activity:"Go for walk"
        },
        {
            id:2,
            activity:"Take a shower"
        },
        {
            id:3,
            activity:"Have breakfast"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
            <AddTodo activityArr={activityArr} setActivityArr={setActivityArr}/>
            <AddTodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
            </div>
        </div>
    )
}

export default Todo;