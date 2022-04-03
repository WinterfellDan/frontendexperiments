import React from 'react';
import {Button, Drawer} from "@mui/material";

export interface SideNavigationProps{}

const SideNavigation: React.FC<SideNavigationProps> = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState<boolean>(false)
    return(<React.Fragment>
        <Button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            variant='contained'
        >Open menu</Button>
        <Drawer
            anchor='left'
            open={menuIsOpen}
            onClose={() => {setMenuIsOpen(false)}}
        >
            <ul>
                <li>LI 1</li>
                <li>LI 2</li>
                <li>LI 3</li>
            </ul>
        </Drawer>
    </React.Fragment>)
}

export default SideNavigation;
