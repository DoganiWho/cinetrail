import { useEffect, useState } from "react";
import axios from 'axios'

export default function Slider() {

    const [upcoming, setUpcoming] = useState<string[]>([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}upcoming?api_keys${import.meta.env.VITE_APP_API_KEY}`)
        .then(res => console.log(res.data.results))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {upcoming.map(movie => {
            <p>{movie.title}</p>
            })}
        </div>
    )
}