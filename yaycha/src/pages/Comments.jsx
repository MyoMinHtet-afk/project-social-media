import { 
    Box,
    Button,
    TextField, 
} from "@mui/material";

export default function Comments() {
    return (
        <Box>
            <form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}>
                    <TextField placeholder="Your Comment"  fullWidth/>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained">
                        Reply
                    </Button>
                </Box>
            </form>
        </Box>
    );
}