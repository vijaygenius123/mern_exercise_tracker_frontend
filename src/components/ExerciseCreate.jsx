import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
    username: "",
    description: "",
    duration: 0,
    date: new Date()
}

const ExerciseCreate = () => {

    const [exercise, setExercise] = useState(initialState)
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE}/users`)
            .then(resp => {
                setUsers(resp.data)
                setExercise({
                    ...exercise,
                    username: resp.data[0].username
                })
            })
    }, [exercise])

    const handleChange = e => {
        setExercise({
            ...exercise,
            [e.target.name] : e.target.value
        })
    }

    const handleDateChange = value => {
        setExercise({
            ...exercise,
            date : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(exercise)
        axios.post(`${process.env.REACT_APP_API_BASE}/exercises`, exercise , {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                toast.success('Exercise logged')
            })
            .catch(() => {
                toast.error('Error adding exercise log')
            })
    }

    return(
        <div className="container">
        <h1>Exercise New Exercise Log</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <select name="username" id="username" className="form-control" onChange={handleChange}>
                        {users.map(user => <option key={user._id} value={user.username}>{user.username}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input value={exercise.description} type="text" name="description" id="description" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration</label>
                    <input value={exercise.duration} type="number" name="duration" id="duration" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <div>
                    <DatePicker selected={exercise.date} className="form-control w-100" name="date" id="date" onChange={handleDateChange}/>
                    </div>
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" className="btn btn-success w-100" value="Add Exercise" />
                </div>
            </form>

        </div>

    )
}

export default ExerciseCreate
