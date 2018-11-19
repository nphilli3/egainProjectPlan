// Import React and Reactstrap
import React, { Component } from 'react';
import { Button, Col, Collapse } from 'reactstrap';

class ContactLead extends Component {
  	constructor(props) {
    	super(props);
    	this.toggle = this.toggle.bind(this);
    	this.state = { collapse: false };
  }
//set the toggle
  	toggle() {
    	this.setState({ collapse: !this.state.collapse });
  }


	render(){
		return(
		<Col sm={12}>
	        <Button id="dropbutton" className="block" onClick={this.toggle}>{this.props.label}</Button>
	        <Collapse isOpen={this.state.collapse}>
		        <div>
		          {this.props.children}
		        </div>
	        </Collapse>
	     </Col>

		)
	}
}

export default ContactLead;