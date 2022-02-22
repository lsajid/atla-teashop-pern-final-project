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
    <div className="index-teas-container">
        <main>

            {teas.map((tea) =>{
                return (
                    <div className="tea-card">
                        <Tea key={tea.id} tea={tea}/>
                    </div>
                )
            })}
        </main>
    </div>
  )
}

export default Teas