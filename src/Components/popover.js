import React from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { NavbarToggler } from 'reactstrap';

class PopoverItem extends React.Component {
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
      <span>
        <NavbarToggler className="mr-1" color="secondary" id={'navPop'} onClick={this.toggle}>
          
        </NavbarToggler>
        <Popover placement={'bottom'} isOpen={this.state.popoverOpen} target={'navPop'} toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            
          </PopoverBody>
        </Popover>
      </span>
    );
  }
}

export default PopoverItem