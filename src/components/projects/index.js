import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import FitnessTracker from '../img/FitnessTracker.jpg';
import NoteTaker from '../img/NoteTaker.jpg';
import TukTuk from '../img/TukTuk.jpg';




const Projects = () => {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src={FitnessTracker} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Fitness Tracker</MDBCardTitle>
          <MDBCardText>
            <a></a>
          </MDBCardText>
          <MDBBtn color="primary" size="md" href="https://enigmatic-inlet-94384.herokuapp.com/?id=5f3b38264bad0f00176e3dd5">
            Deployed
          </MDBBtn>
          <MDBBtn color="primary" size="md" href="https://github.com/RadioJackie/Get-Fit-Workout-Tracker/">
            GitHub
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={NoteTaker} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Note Taker</MDBCardTitle>
          <MDBCardText>
          <a>This is a Note Taker App</a>
          </MDBCardText>
          <MDBBtn color="primary" size="md" href="https://agile-fjord-27311.herokuapp.com/">
            Deployed
          </MDBBtn>
          <MDBBtn color="primary" size="md" href="https://github.com/RadioJackie/Note-Taker">
            GitHub
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={TukTuk} alt="Fitness Tracker" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">TukTuk</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </MDBCardText>
          <MDBBtn color="primary" size="md" href="https://murmuring-sierra-02687.herokuapp.com/">
            Deployed
          </MDBBtn>
          <MDBBtn color="primary" size="md" href="https://github.com/RadioJackie/TukTuk">
            GitHub
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default Projects;