import { AppBar, Toolbar, Typography } from '@mui/material';

import Link from '@CommonComponents/Link';

const Header = () => <AppBar className="header" position="static">
    <Toolbar className="navbar">
        <Typography variant="h6" component="div">
            <Link to="/" className="non-styled">Hamarregionen</Link>
        </Typography>
    </Toolbar>
</AppBar>

export default Header;