import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import logoDark from '../../assets/aboutus/logo-1.png'; // Logo for dark background
import logoLight from '../../assets/aboutus/logo-2.png'; // Logo for light background
import './Navbar.css';

const NavbarContainer = styled(AppBar)(({ scroll }) => ({
  background: scroll ? '#fff' : 'linear-gradient(90deg, #452041, #452041)',
  color: scroll ? '#452041' : '#fff',
  transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
  marginBottom: '16px',
  boxShadow: scroll ? '' : 'none',
}));

const NavbarTitle = styled(Typography)({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
});

const NavbarButton = styled(Button)({
  marginLeft: '16px',
  color: 'inherit',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const Logo = styled('img')({
  marginRight: '10px',
  height: '40px',
}); // Styling for the logo

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setDrawerOpen(false);
      }
    };

    const adjustMargin = () => {
      const navbar = document.querySelector('.navbar-container');
      const nextElement = navbar.nextElementSibling;
      if (nextElement) {
        nextElement.style.marginTop = `${navbar.offsetHeight}px`;
      }
    };

    handleResize();
    adjustMargin();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', adjustMargin);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', adjustMargin);
    };
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (link) => {
    setDrawerOpen(false);
    navigate(link);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About Us', link: '/about-us' },
    { text: 'Services', link: '/services' },
    { text: 'Products', link: '/products' },
    { text: 'Gallery', link: '/gallery' },
    { text: 'Contact Us', link: '/contact-us' },
  ];

  return (
    <NavbarContainer className="navbar-container" position="fixed" scroll={scroll}>
      <Container maxWidth="lg">
        <Toolbar>
          <NavbarTitle variant="h6">
            <Logo
              src={scroll ? logoLight : logoDark}
              alt="Newlin Textile Logo"
            /> {/* Conditionally render the logo */}
            NEWLIN TEXTILE
          </NavbarTitle>
          {!isMobileView && (
            <div className="menu-desktop">
              {menuItems.map((item) => (
                <NavbarButton
                  key={item.text}
                  component={Link}
                  to={item.link}
                >
                  {item.text}
                </NavbarButton>
              ))}
            </div>
          )}
          <IconButton edge="start" color="inherit" aria-label="menu" className="menu-mobile" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <div className="drawer-header">
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </div>
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.link}
                  onClick={() => handleNavigation(item.link)}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
