import { useState } from "react"

type User = {
    name: string
    email: string
}

const User = () => {
const [user, setUser] = useState<User>({} as User)
const handleLogin = ()=>{
    setUser({name: "Filip", email: "file@yahoo.com"})
}
// const handleLogout = ()=>{
//     setUser(null)
// }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user.name}</div>
            <div>User email is{user.email}</div>
        </div>
    )
}

export default User
