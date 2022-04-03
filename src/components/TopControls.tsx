import React from 'react';
import {AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import {useLocation, useNavigate} from "react-router-dom";
import {Places} from "../constants/Places";

export interface TopControlProps {
    toggleDisplayMenu: () => void;
    menuDisplayed: boolean;
}

interface TopBarProps {
    toggleDisplayMenu: () => void;
}

const TopBar: React.FC<TopBarProps> = props => (
    <AppBar position="static">
        <Toolbar>
            <IconButton
                onClick={props.toggleDisplayMenu}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
)

const NavMenu: React.FC<TopControlProps> = props => {
    const navigate = useNavigate();
    const location = useLocation();
    const doNavigation = (destination: string) => {
        navigate(destination);
        props.toggleDisplayMenu();
    }

    const places = Object.values(Places);
    const placeDescriptions = {
        [Places.EditCards]: "Edit Cards",
        [Places.Review]: "Review",
        [Places.Landing]: "Home"
    }
    return (
        <Drawer
            open={props.menuDisplayed}
            onClose={props.toggleDisplayMenu}
        >
            <List>
                {places.map(p =>
                    <ListItem
                        button
                        onClick={() => doNavigation(p)}
                        selected={location.pathname === `/${p}`}
                    >
                        <ListItemText>
                            {placeDescriptions[p]}
                        </ListItemText>
                    </ListItem>
                )}
            </List>
        </Drawer>
    )
}

const TopControls: React.FC<TopControlProps> = props => {
    return(<Box sx={{ flexGrow: 1}}>
        <TopBar toggleDisplayMenu={props.toggleDisplayMenu}/>
        <NavMenu {...props} />
    </Box>)
}

export default TopControls;
