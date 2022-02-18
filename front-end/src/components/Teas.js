import axios from "axios";
import { useState, useEffect } from "react";
import Tea from "./Tea";

const API = process.env.REACT_APP_API_URL;

function Teas() {
    const [ teas, setTeas] = useState([]);

    useEffect(() => {
        axios.get(`${API}/teas`)
            .then((res) => {
                setTeas(res.data)
            }).catch((err) => console.log(err))
    }, []);

  return (
    <div>
        <main>
            {teas.map((tea) =>{
                return (
                    <Tea key={tea.id} tea={tea}/>
                )
            })}
        </main>
    </div>
  )
}

export default Teas