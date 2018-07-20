import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col} from 'reactstrap';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
      <Container className="form" style={{paddingTop:'20px'}}>
        <Col xs="auto">
        <Form>
          <FormGroup>
            <Label for="exampleName">Full Name</Label>
            <Input type="name" name="name" id="exampleName" placeholder="Enter First and Last Name" size="12" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Address" size="12" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePhone">Phone Number</Label>
            <Input type="phone" name="phone" id="examplePhone" placeholder="Enter Phone Number" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Your Message</Label>
            <Input type="textarea" name="text" id="exampleText" placeholder="Enter Text" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Upload file with additional project detailed information
            </FormText>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Col>
      </Container>
      </div>
    );
  }
}

export default Contact
