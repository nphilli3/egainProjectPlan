// Import React and Reactstrap
import React from 'react';
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';

const ContacUs = (props) => {
    return (
      <Col sm={props.colsize || 12}>
       <FormGroup>
       <Form method='post' action='/contactus'>
       <label htmlFor="suggestion">{props.title || "What would you like to tell us?"}</label>
          <Input type="name" name="name" id='contactName' placeholder="Your Name" />
          <Input type="email" name="email" id="contactEmail" placeholder="Your Email" />
          <Input type='textarea' name='message' rows="5" id="myMessage" placeholder ='Your Message'></Input>
          <div className='text-right' id='save'>
            <Button type="submit" className="save">Save</Button>
          </div>
        </Form>
      </FormGroup>
      </Col>
    );
  }

export default ContacUs;
