import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


function Navbar(){
    return (
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
          <Header transparent title="Jacob Peters Portfolio" style={{ color: 'white' }}>
            <Navigation>
              <a href="#">About Me</a>
              <a href="#">Projects</a>
              <a href="me">Resume</a>
              <a href="#">Contact</a>
            </Navigation>
          </Header>
          <Content />
        </Layout>
      </div>
    );
  }

export default Navbar;