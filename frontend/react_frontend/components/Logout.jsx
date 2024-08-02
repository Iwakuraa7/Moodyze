import { useContext } from "react";
import { UserContext } from "../src/App";

export default function Logout() {
    const [isUser, setUser] = useContext(UserContext);

    async function logout() {
        try {
            const response = await fetch('http://localhost:8000/mail/logout');
            const data = await response.json();
            console.log(data.message);
            setUser(false);
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <>
        <a onClick={logout}>Logout</a>
        </>
    )
}