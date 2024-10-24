import { 
    createTheme,
    ThemeProvider,
    CssBaseline,
} from "@mui/material";

import { 
    useMemo,
    useState,
    useContext,
    createContext,
} from "react";

import { 
    createBrowserRouter,
    RouterProvider, 
} from "react-router-dom";

import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Comments from "./pages/Comments";
import Likes from "./pages/Likes";

import { grey } from "@mui/material/colors";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/profile/:id",
                element: <Profile />
            },
            {
                path: "comments/:id",
                element: <Comments />
            },
            {
                path: "likes/:id",
                element: <Likes />
            }
        ],
    },
])

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

export default function ThemedApp(){
    const [mode, setMode] = useState("dark");
    const [auth, setAuth] = useState(null);
    const [showDrawer, setShowDrawer] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const theme = useMemo(() => {
        return createTheme({
            palette: { 
                mode,
                banner: mode === "dark" ? grey[800] : grey[500],
            },
        })
    }, [mode]);

    return(
        <ThemeProvider theme={theme}>
            <AppContext.Provider
              value={{
                mode, setMode,
                auth,setAuth,
                showDrawer, setShowDrawer,
                showForm, setShowForm,
              }} >
                <RouterProvider router={router} />
                <CssBaseline />
            </AppContext.Provider>
        </ThemeProvider>
    );
}