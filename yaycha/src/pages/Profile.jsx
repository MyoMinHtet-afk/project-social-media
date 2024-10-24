import { 
    Box,
    Avatar,
    Typography, 
} from "@mui/material";

import { pink } from "@mui/material/colors";

export default function Profile(){
    return (
        <Box>
            <Box sx={{ height: 140, bgcolor: "banner", borderRadius: 4 }}></Box>
            <Box
              sx={{
                marginTop: "-60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                mb: 4,
              }}>
                <Avatar sx={{ width: 100, height: 100, bgcolor: pink[500]}} />
                <Box sx={{ textAlign: "center" }}>
                    <Typography>Alice</Typography>
                    <Typography sx={{ fontSize: "0.8em"}}>
                        Alice's profile bio content here
                    </Typography>
                </Box>
              </Box>
        </Box>
    );
}