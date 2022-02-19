import { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import solid from "../assets/heart-solid.png";
import regular from "../assets/heart-regular.png";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

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
    }
  return (
    <article>
        <h6> TeaDetails </h6>
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
                <div></div>
                <div></div>
                <div></div>
            </Box>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                <Button variant="outlined" endIcon={""}>Back</Button>
            </Stack>
        </Container>
    </article>
  )
}

export default TeaDetails