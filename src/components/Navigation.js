import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="navigation" color="transparent" light expand="md">
                    <NavbarBrand href="/"> <img alt="brand" src={require('../assets/mijara.png')} style={{height:'40px'}} /> </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} style={{border: "none"}}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Careers</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
