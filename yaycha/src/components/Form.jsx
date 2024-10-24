import { 
    Box, 
    TextField,
    Button,
} from "@mui/material";

export default function Form(){
    return(
        <form>
            <Box
              sx={{ mb: 4, textAlign: "right" }}>
                <TextField
                  placeholder="Content"
                  fullWidth
                  multiline
                  sx={{ mb: 1 }} />
                
                <Button
                  variant="contained"
                  type="submit">
                    Post
                </Button>
            </Box>
        </form>
    );
}