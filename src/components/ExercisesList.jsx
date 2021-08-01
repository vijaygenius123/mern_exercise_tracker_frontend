import {useState, useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const ExercisesList = () => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE}/exercises`)
            .then(resp => {
                setExercises(resp.data)
            })
            .catch(() => {
                toast.error('')
            })
    }, [])

    return(
        <div className="container">
        <h1>Exercises List</h1>
            {exercises.length > 0 ? (
                <table className="table table-bordered table-striped ">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Description</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {exercises.map(exercise => (
                        <tr key={exercise._id}>
                            <td>{exercise.username}</td>
                            <td>{exercise.description}</td>
                            <td>{exercise.duration}</td>
                            <td>{exercise.date}</td>
                            <td>{}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ): null}

        </div>
    )
}

export default ExercisesList
