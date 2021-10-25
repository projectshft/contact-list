import {Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";


const NavStyle = styled.ul`
  a {
    text-decoration: none;
    color:white;
  }
  .navlink {
    margin-left:50px;
    padding-bottom:10px;
    color:white;
    font-weight:bold;
  } 
  .current {
    border-bottom: 2px solid white;
  }
  margin-bottom:0;
`;

const NavigationBar = () => (
  <>
    <Navbar bg="dark" variant="dark" fixed="top">
        <NavStyle>
          <NavLink to='/'exact>
              <Navbar.Brand>
                <img
                  alt=""
                  src="/logo.png"
                  width="60"
                  height="30"
                  className="d-inline-block align-top"
                />{'    '}
                <strong>KONTAX</strong>
                </Navbar.Brand>
          </NavLink>
          <NavLink to='/' exact activeClassName="current" className="navlink" >
            Home
          </NavLink>
          <NavLink to='/contacts/new' activeClassName="current" className="navlink" >
            Add New
          </NavLink>
        </NavStyle>
    </Navbar>
    <br />
  </>
);

export default NavigationBar;
