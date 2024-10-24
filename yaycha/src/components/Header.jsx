import { 
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
} from "@mui/material";

import {
    Menu as MenuIcon,
    Add as AddIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
} from "@mui/icons-material";

import { useApp } from "../ThemedApp";

export default function Header(){
    const { setShowDrawer, mode, setMode, setShowForm } = useApp();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={() => setShowDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography
                  sx={{
                    ml: 2,
                    flexGrow: 1,
                  }}>
                    Yaycha
                </Typography>
                <Box>
                    <IconButton
                      color="inherit"
                      onClick={() => setShowForm(true)}>
                        <AddIcon />
                    </IconButton>
                    {mode === "dark" ? (
                        <IconButton
                          edge="end"
                          color="inherit"
                          onClick={() => setMode("light")}>
                            <LightModeIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                          edge="end"
                          color="inherit"
                          onClick={() => setMode("dark")}>
                            <DarkModeIcon />
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}