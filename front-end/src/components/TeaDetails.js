import { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import solid from "../assets/heart-solid.png";
import regular from "../assets/heart-regular.png";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import HexagonIcon from '@mui/icons-material/Hexagon';

const API = process.env.REACT_APP_API_URL;


function TeaDetails() {
    const [ tea, setTea ] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${API}/teas/${id}`)
            .then((res => {
                setTea(res.data);
            })).catch((err) => console.log(err));
    }, [id, API])

    const handleDelete = () => {
        axios.delete(`${API}/teas/${id}`)
            .then((res) => {
                window.alert("The order has been deleted");
                navigate("/teas");
            }).catch((err) => {
                console.log(err);
            })
    };

  return (
    <article>

        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <h2>{tea.name}</h2>
                {tea.is_popular ? (
                    <img src={solid} alt="popular" />
                ) : (
                    <img src={regular} alt="not-popular"/>
                )}
                <div>
                    <img src={tea.image} alt={tea.name}/>
                </div>
                <div>{tea.description}</div>
                <div> Price: {tea.price} copper coins <HexagonIcon/> </div>
            </Box>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={handleDelete} startIcon={<DeleteIcon />}>Delete</Button>
                
                    <Button variant="outlined" endIcon={""}> <Link to={`/teas/${id}/edit`}>Edit</Link></Button>    
                <Link to={`/teas`}> 
                    <Button variant="outlined" endIcon={""}>Back</Button>
                </Link>
            </Stack>
        </Container>
    </article>
  )
}

export default TeaDetails