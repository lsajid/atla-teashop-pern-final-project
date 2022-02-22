import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import axios from 'axios';

//MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const API = process.env.REACT_APP_API_URL;

function TeaEditForm() {
    const { id } = useParams();
    let navigate = useNavigate();
    console.log(id)

    console.log(API)
    const [ tea, setTea ] = useState({
        name: "",
        image: "",
        description: "",
        price: "",
    });



    const updateTea = (updatedTea) => {
        axios
            .put(`${API}/teas/${id}`, updatedTea)
            .then(
                () => {
                    navigate(`/teas/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
		setTea({ ...tea, [event.target.id]: event.target.value });
	};

    useEffect(() => {
		axios
			.get(`${API}/teas/${id}`)
			.then(
				(res) => {
					setTea(res.data);
				},
				(error) => navigate(`not-found`)
			)
			.catch((err) => console.log(err));
	}, []);

    const handleSubmit = (event) => {
		event.preventDefault();
		updateTea(tea, id);
		navigate("/teas");
	};

  return (
    <div className='edit-container'>
        <Box sx={{ display: 'flex', flexWrap: 'wrap'}} className='edit-info'>
            <h1>Edit Info</h1>
        <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <OutlinedInput
                        id="name"
                        type= 'text'
                        value={tea.name}
                        onChange={handleTextChange}
                        label="name"
                    />
                </FormControl>
                <FormControl  fullWidth sx={{ m: 1}} variant="outlined">
                    <InputLabel htmlFor="image">Image</InputLabel>
                    <OutlinedInput
                        id="image"
                        value={tea.image}
                        onChange={handleTextChange}
                        type="text"
                        label='image'
                    />
                    <FormHelperText id="outlined-weight-helper-text">URL</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, width: '76ch' }} variant="outlined">
                <InputLabel htmlFor="image"></InputLabel>
                    <TextField
                        id="description"
                        value={tea.description}
                        onChange={handleTextChange}
                        label='Description'
                        multiline
                        rows={5}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="price">Price</InputLabel>
                    <OutlinedInput
                        id="price"
                        value={tea.price}
                        type='number'
                        onChange={handleTextChange}
                        endAdornment={<InputAdornment position="end">copper coins</InputAdornment>}
                        label="price"
                    />
                </FormControl>
                <Stack direction='row' spacing={2}>
                    <Link to={`/teas/${id}`}> <Button variant="outlined">Back</Button> </Link>
                    <Button type="submit" variant="outlined" endIcon={""}>Submit</Button>

                </Stack>
            </form>
        </Box>
    </div>
  )
}

export default TeaEditForm
