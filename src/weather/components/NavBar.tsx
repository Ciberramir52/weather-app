import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

interface userName {
    user: string,
}

export function NavBar( { user }:userName ) {

    const navigate = useNavigate();

    const backPage = () => {
        navigate("/");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="back" onClick={ backPage } sx={{ mr: 2 }}>
                <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
                Bienvenido { user }
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
}