/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Sugestpopover extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Form method='post' action='/contactus'>
            <label htmlFor="suggestion">What would you like to tell us?</label>
            <Input type="name" name="name" id='contactName' placeholder="Your Name" />
            <Input type="email" name="email" id="contactEmail" placeholder="Your Email" />
            <Input type='textarea' name='message' rows="5" id="myMessage" placeholder ='Your Message'></Input>
            <div className='text-right' id='save'>
              <Button type="submit" className="save">Save</Button>
            </div>
          </Form>
        </FormGroup>
      </div>
    );
  }
}