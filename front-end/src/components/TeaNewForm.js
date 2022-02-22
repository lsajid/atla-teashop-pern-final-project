import { useState } from "react";
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

function TeaNewForm() {
  const [ tea, setTea ] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
  });

  let navigate = useNavigate();

  const addTea = (newTea) => {
    axios.post(`${API}/teas`, newTea)
      .then(
        () => {
          navigate(`/teas`);
        },
        (err) => console.error(err)
      )
      .catch((err) => console.warn("catch", err))
  }

  const handleTextChange = (event) => {
		setTea({ ...tea, [event.target.id]: event.target.value });
	};

  const handleSubmit = (event) => {
    event.preventDefault();
    addTea(tea)
  }

  return (
    <div className="new-container">
    <Box sx={{ display: 'flex', flexWrap: 'wrap'}} className='new-info'>
      <h1>Create New</h1>
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
              <Button type="submit" variant="outlined" endIcon={""}>Submit</Button>
              <Link to={`/teas`}> <Button variant="outlined">Back</Button> </Link>
            </Stack>
        </form>
    </Box>
</div>
  )
}

export default TeaNewForm