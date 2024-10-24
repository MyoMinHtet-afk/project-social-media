import { 
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Typography,
    Avatar,
    Divider,
} from "@mui/material";

import { 
    Home as HomeIcon,
    Person as ProfileIcon,
    Logout as LogoutIcon,
    Login as LoginIcon,
    PersonAdd as RegisterIcon, 
} from "@mui/icons-material";

import { deepPurple } from "@mui/material/colors";
import { useApp } from "../ThemedApp";

export default function AppDrawer(){
    const { auth, showDrawer, setShowDrawer } = useApp();
    return(
        <Drawer
          open={showDrawer}
          onClose={() => setShowDrawer(false)}>
            <Box
              sx={{
                height: 140,
                width: 300,
                bgcolor: "banner",
                position: "relative",
                mb: 6,
              }}>
                <Box
                  sx={{
                    position: "absolute",
                    left: 20,
                    bottom: -30,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                  }}>
                    <Avatar
                      sx={{
                        height: 90,
                        width: 90,
                        color: "white",
                        bgcolor: deepPurple[500],
                      }} />
                    <Typography sx={{ fontWeight: "bold" }}>
                        Alice
                    </Typography>
                  </Box>
              </Box>
              <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Home
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                <Divider />

                {auth && (
                    <>
                      <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ProfileIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Profile
                            </ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Logout
                            </ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </>
                )}
                {!auth && (
                    <>
                      <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Login
                            </ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <RegisterIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Register
                            </ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </>
                )}
              </List>
        </Drawer>
    );
}