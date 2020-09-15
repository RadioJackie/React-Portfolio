import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import BudgetTracker from '../img/BudgetTracker.jpg';
import WhatsForDinner from '../img/WhatsForDinner.jpg';
// import Img3 from '../img/.jpg'
const Projects2 = () => {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src={BudgetTracker} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Budget Tracker</MDBCardTitle>
          <MDBCardText>
            <a></a>
          </MDBCardText>
          <MDBBtn color="primary" size="md" href="https://agile-fjord-27311.herokuapp.com/">
          Deployed
          </MDBBtn>
          <MDBBtn color="primary" size="md" href="https://github.com/RadioJackie/PWA-Budget_Tracker">
            GitHub
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={WhatsForDinner} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">What's For Dinner?</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </MDBCardText>
          <MDBBtn color="primary" size="md" href="https://jtcravey1991.github.io/allen-parsons-projekt/">
            Deployed
          </MDBBtn>
          <MDBBtn color="primary" size="md" href="https://github.com/RadioJackie/allen-parsons-projekt">
            GitHub
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={WhatsForDinner} top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">ProcrastiHaters</MDBCardTitle>
          <MDBCardText>
            Soon To Come...
          </MDBCardText>
          <MDBBtn color="primary" size="md" href="#">
          Deployed
          </MDBBtn>
          <MDBBtn color="primary" size="md" href="#">
            GitHub
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default Projects2;