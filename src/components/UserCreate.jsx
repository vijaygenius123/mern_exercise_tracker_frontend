import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const UserCreate = () => {

    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API_BASE}/users`, {
            username
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            console.log(resp.data)
            toast.success("Created a User");
            setUsername('')
        }).catch(() => {
            toast.error("Error creating User");
        })
    }

    const handleInputChange = e => {
        setUsername(e.target.value)
    }

    return(
        <div className="container">
        <h1>User Create</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" id="username" value={username} onChange={handleInputChange} autoComplete="false"/>
            </div>
            <br />
            <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-success w-100"/>
            </div>
        </form>
        </div>
    )
}

export default UserCreate
