import React, { Component } from 'react';
import { Jumbotron, Button, Collapse, Col, Row, Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Mydropdown from './mydropdown'
import ContactUs from './contactus'
import Navdropdown from './navdropdown'

class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
//set the toggle
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render(props){
    return (
      <div>
        <Jumbotron className='myjumbotron' id='superjumbo'>
      	<div className="container" id="jumbobutton">
        		<div>
          	<h1 id='iot'>IOT</h1>
      	</div>
      		<div>
        			<h3>Recruiting Ideas for the future</h3>
        			 <Button className="btn-secondary" onClick={this.toggle}>Get involved</Button>
      		</div>
    		</div>

      	
        </Jumbotron>
        <Collapse isOpen={this.state.collapse}>
          <div>
			<Navdropdown/>
          </div>
          
        </Collapse>
      </div>
          
    )
  }
}
export default Jumbo