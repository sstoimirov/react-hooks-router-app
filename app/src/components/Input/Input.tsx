import React from "react";
import { InputType } from "../../typings/typings";

export const Input: React.FC<InputType> = ({ saveTodo }) => {
    const [value, setValue] = React.useState("");

    return (
        <div className="input-wrapper">
            <input type="text" placeholder="Enter todo..." onChange={(e) => { setValue(e.target.value) }} value={value}></input>
            <button onClick={() => {
                saveTodo(value);
                setValue("")
            }} type="submit">Submit</button>
        </div>
    )
}