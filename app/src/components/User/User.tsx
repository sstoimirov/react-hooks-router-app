import * as React from "react";
import { UserType } from "../../typings/typings";

export const User: React.FC<UserType> = ({ id, avatar, email, first_name, last_name }) => {
    return (
        <div className="user" key={id}>
            <div className="user-name">Name: {first_name}</div>
            <div className="user-last-name">Last Name: {last_name}</div>
            <div className="user-email">Email: {email}</div>
            <a href="#!"><img src={avatar} alt="User" /></a>
        </div>
    )
}
export default User