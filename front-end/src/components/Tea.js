import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

function Tea({ tea }){
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={tea.image}
                alt="tea-card"
            />
            <CardContent gutterBottom variant="h5" component="div">
                <Typography >
                    {tea.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {tea.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/teas/${tea.id}`}>
                    <Button size="small">Veiw More</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default Tea;