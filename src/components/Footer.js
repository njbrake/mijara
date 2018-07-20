import React from 'react';
import { Nav, NavItem, NavLink, Row, Col} from 'reactstrap';

class Footer extends React.Component {
  render() {
    return (
      <Row>
        <Col>
        <img alt="brand" src={require('../assets/mijara.png')} style={{height:'40px', paddingLeft: '15px'}} />
        </Col>
        <Nav style={{paddingLeft: '5px', paddingRight: '5px'}}>
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
        <hr/>
      </Row>
    );
  }
}

export default Footer;
