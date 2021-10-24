import { Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";

const NavStyle = styled.ul`
  a {
    text-decoration: none;
  }
  margin-bottom:0;
`;

const NavigationBar = () => (
  <>
    <Navbar bg="dark" variant="dark">
        <NavStyle>
          <NavLink to='/'>
              <Navbar.Brand>
                <img
                  alt=""
                  src="/logo.png"
                  width="60"
                  height="30"
                  className="d-inline-block align-top"
                />{'  '}
                <strong>KONTAX</strong>
                </Navbar.Brand>
          </NavLink>
        </NavStyle>
    </Navbar>
    <br />
  </>
);

export default NavigationBar;
