// Import React and Reactstrap
import React from 'react';
import { Row, Col } from 'reactstrap';
// Import Images
import Elija from '../images/Elija.jpeg'
import Don from '../images/Don.jpeg'
import RoDreko from '../images/RoDreko.jpeg'
import Nate from '../images/Nate.jpeg'
import Willie from '../images/Willie.jpeg'
import Matt from '../images/matt.jpeg'
import Tim from '../images/tim.jpeg'
import Jen from '../images/Bartmas.png'
import Leon from '../images/Pennington.png'
import Eric from '../images/mikesell.png'
// Import Custom Components
import TeamCard from './cards/teamcard' 



//Define class and toggle props
const teamMembers = 
[
  { 
    facilitators:[
      {
        name: 'Elija',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/2892057/'
      },
      {
        name:'Nate',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/1693303/'
      }
    
    ],
  },
  {
    reporters:[
      {
        name:'Jen',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/2803102/'
      },
      {
        name: 'Matt',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/2848139/'
      }
    ],
  },
  {
    team:[
   
      {
        name: 'Don',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/285073/'
      },
      {
        name:'RoDreko',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/532726/'
      },
      {
        name:'Willie',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/373709/'
      },
      {
        name:'Tim',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/2758043/'
      },
      {
        name:'Leon',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/2867279/'
      },
      {
        name: 'Eric',
        link: 'https://intranet.global.dish.com/employeeSearchDetails/1478001/'
      }
    ],
  }
]


const Team = (props) =>{
  return (
    <div>
    <Row>
      <Col sm={6}>
        <Row>
          <h2 id='teamTitle'>Facilitators</h2>
        </Row>
        <Row>
          <TeamCard colsize='6' image={Elija} title={teamMembers[0].facilitators[0].name} link={teamMembers[0].facilitators[0].link}/>
          <TeamCard colsize='6' image={Nate} title={teamMembers[0].facilitators[1].name}link={teamMembers[0].facilitators[1].link}/>
        </Row>
      </Col>
      <Col sm={6}>
        <Row>
          <h2 id='teamTitle'>Reporters</h2>
        </Row>
        <Row>
          <TeamCard colsize='6' image={Jen} title={teamMembers[1].reporters[0].name}link={teamMembers[1].reporters[0].link}/>
          <TeamCard colsize='6' image={Matt} title={teamMembers[1].reporters[1].name}link={teamMembers[1].reporters[1].link}/>
        </Row>
      </Col>
    </Row>  
    <Row>
      <h2 id='teamTitle'>Core Team</h2>
    </Row>
    <Row>
      <TeamCard image={Don} title={teamMembers[2].team[0].name}link={teamMembers[2].team[0].link}/>
      <TeamCard image={RoDreko} title={teamMembers[2].team[1].name}link={teamMembers[2].team[1].link}/>
      <TeamCard image={Willie} title={teamMembers[2].team[2].name}link={teamMembers[2].team[2].link}/>
      <TeamCard image={Tim} title={teamMembers[2].team[3].name}link={teamMembers[2].team[3].link}/>
      <TeamCard image={Leon} title={teamMembers[2].team[4].name}link={teamMembers[2].team[4].link}/>
      <TeamCard image={Eric} title={teamMembers[2].team[5].name}link={teamMembers[2].team[5].link}/>

    </Row>
    </div>
  );
}

export default Team;

