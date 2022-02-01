import React, { Component } from 'react';
import Layout from '../components/Layout';
import BackgroundImage from '../components/BackgroundImage';
import { Button, Segment } from 'semantic-ui-react';
import { Router } from '../routes';


class IndexPage extends Component {

  render(){
    return (
      <Layout>
        <Segment basic textAlign={"center"}>

          <Button
            onClick={() => Router.pushRoute('/library')}
            size='huge'
            style={{textAlign: "center"}}
            color='blue'>
            Enter the library
          </Button>

        </Segment>
      </Layout>
    );

  };

};

export default IndexPage;
