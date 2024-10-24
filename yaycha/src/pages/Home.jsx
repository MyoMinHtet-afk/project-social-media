import { Box } from "@mui/material";

import Form from "../components/Form";
import { useApp } from "../ThemedApp";

export default function Home(){
    const { showForm } = useApp();
    return(
        <Box>
            {showForm && <Form />}
        </Box>
    );
}