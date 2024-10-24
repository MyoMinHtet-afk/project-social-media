import { 
    Box,
    Button,
    TextField,
    Alert,
    Typography,
} from "@mui/material";

export default function Login(){
    return(
        <form>
            <Typography variant="h3" sx={{ mb: 1 }}>Login</Typography>
            <Alert severity="warning">all fields requried</Alert>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                mt: 2,
              }}>
                <TextField
                  placeholder="Username"
                  fullWidth
                  type="text"
                />
                <TextField 
                  placeholder="Password"
                  type="password"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth>
                    Login
                </Button>
            </Box>
        </form>
    );
}