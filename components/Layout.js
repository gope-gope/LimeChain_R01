import React, { Component } from 'react';
import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import BackgroundImage from './BackgroundImage';

const Layout = (props) => {

    return (

      <Container>

        <Head>
          <link
            async
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
          />
          <script
            async
            src="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.js"
          ></script>
        </Head>

        {props.children}

      </Container>

    );

};

export default Layout;
