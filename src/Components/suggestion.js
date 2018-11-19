// Import React and Reactstrap
import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Suggestions = (props) => {
  let route =''
  if(!props.children){
    route = '/suggestion'
  }else{
    route = '/projectsuggestion'
  }
    return (
      <FormGroup>
        <Form method = 'post' action={route}>
          <label htmlFor="suggestion"></label>
          {props.children}
          <Input name='message' type='textarea' rows="5" placeholder={props.placeholder ||'Tell us How we can improve'}></Input>
          <div className='text-right' id='save'>
            <Button type="submit" className='save'>Save</Button>
          </div>
        </Form>
      </FormGroup>
    );
  }

export default Suggestions;