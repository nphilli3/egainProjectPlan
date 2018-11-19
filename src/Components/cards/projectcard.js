
import React from 'react';
import { Card, CardTitle, CardText, Input } from 'reactstrap';
import Mydropdown from '../mydropdown' 
import Suggestions from '../suggestion'

const ProjectCard = (props) => {
  return (
      <Card>
        <CardTitle>{props.projectTitle}</CardTitle>
        <CardText>{props.projectText}</CardText>
        <Mydropdown label={props.buttonLabel}>{<Suggestions placeholder={props.placeholder}>{ <Input name='name' type='name' placeholder='Your Name'/>}</Suggestions>}</Mydropdown>
      </Card>
  );
};

export default ProjectCard;