import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Image, Segment, Visibility } from 'semantic-ui-react';


const BackgroundImage = () => {
  return (
    <Image src = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
      centered = 'true'
      style = {{ marginTop: '20px', marginBot: '20px' }}
      rounded = 'true'
      fluid
    />
  );
}
export default BackgroundImage;
