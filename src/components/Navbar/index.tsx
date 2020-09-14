import React, {
    useState,
    useCallback,
    MouseEvent,
} from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Avatar } from './styles';

import {
    Container as MaterialContainer,
    Menu,
    Button,
} from '@material-ui/core';

import logo from '../../assets/logo-etapa.png';

const Navbar: React.FC = () => {
    const { signOut, user } = useAuth();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClickAvatar = useCallback((
        event: MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <Container>
            <MaterialContainer>
                <img src={logo} alt="Sistema Etapa"/>

                <div className="container-navbar">
                    <nav>
                        <NavLink to="/home" activeClassName="active">
                            Home
                        </NavLink>

                        <NavLink to="/classroom" activeClassName="active">
                            Preparando aula
                        </NavLink>
                    </nav>

                    <Avatar>
                        <Button
                            aria-controls="user-avatar"
                            aria-haspopup="true"
                            onClick={handleClickAvatar}
                        >
                            <img src="https://avatars1.githubusercontent.com/u/45057940?s=460&u=7b54fe90dcf704f572207b0a2a7f59f948fdd63e&v=4" alt={user.name}/>
                        </Button>

                        <Menu
                            id="user-avatar"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            style={{
                                top: 45,
                            }}
                        >
                            <NavLink to="/profile">
                                Perfil
                            </NavLink>
                            <NavLink to="/help">
                                Ajuda
                            </NavLink>

                            <Button onClick={signOut}>Sair</Button>
                        </Menu>
                    </Avatar>
                </div>
            </MaterialContainer>
        </Container>
    );
};

export default Navbar;
