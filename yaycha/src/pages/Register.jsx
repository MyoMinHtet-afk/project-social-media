import { 
    Box, 
    Typography,
    Alert,
    TextField,
    Button,
} from "@mui/material";

export default function Register () {
    return (
        <form>
            <Typography variant="h3" sx={{ mb: 2 }}>Register</Typography>
            <Alert severity="warning">All fields required.</Alert>
            <Box 
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}>
                <TextField
                  placeholder="Name"
                  fullWidth 
                />
                <TextField
                  placeholder="Username"
                  fullWidth
                />
                <TextField
                  placeholder="Bio" 
                  fullWidth
                />
                <TextField 
                  placeholder="Password"
                  fullWidth
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained">
                    Register
                </Button>
              </Box>
        </form>
    );
}