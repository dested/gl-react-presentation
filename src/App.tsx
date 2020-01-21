import React, {FC} from 'react';
import {CodePane, Fit, Heading, Quote, Slide, Text} from 'spectacle';
import {Box, Deck, FlexBox, FullScreen, Progress} from 'spectacle';
import {Example1} from './examples/example1';
import {Example2} from './examples/example2';
import {Example3} from './examples/example3';
import {ExampleBump} from './examples/exampleBump';
import {ExampleBump2} from './examples/exampleBump2';
import {ExampleVideo} from './examples/exampleVideo';
import {ExampleWebcam} from './examples/exampleWebcam';

const theme = {};

const Footer = () => (
  <FlexBox justifyContent={'space-between'} position={'absolute'} bottom={0} width={'95%'}>
    <Box padding={10} key={'progress-templ'}>
      <Progress />
    </Box>
    <Box padding={10} key={'fullscreen-templ'}>
      <Text>@dested</Text>
    </Box>
  </FlexBox>
);
const Center: FC<{}> = props => (
  <FlexBox justifyContent={'center'} alignItems={'center'} width={'100%'} height={'70vh'}>
    <Heading>{props.children}</Heading>
  </FlexBox>
);

const App: React.FC = () => {
  return (
    <Deck loop={false} theme={theme}>
      <Slide>
        <Heading>hi</Heading>
        <Text>hi</Text>
        <Footer />
      </Slide>
      <Slide>
        <Heading>So What Is WebGL</Heading>
        <Quote>
          WebGL is a cross-platform, royalty-free web standard for a low-level 3D graphics API based on OpenGL ES 2.0
        </Quote>
        <Footer />
      </Slide>
      <Slide>
        <Center>What Can WebGL Do?</Center>
        <Footer />
      </Slide>
      <Slide>
        <Heading>This</Heading>
        <iframe src={'https://webglsamples.org/aquarium/aquarium.html'} style={{width: '100%', height: '500px'}} />
        <Footer />
      </Slide>
      <Slide>
        <Heading>And This</Heading>
        <iframe src={'https://webglsamples.org/city/city.html'} style={{width: '100%', height: '500px'}} />
        <Footer />
      </Slide>
      <Slide>
        <Heading>And This!</Heading>
        <iframe
          src={'https://webglsamples.org/dynamic-cubemap/dynamic-cubemap.html'}
          style={{width: '100%', height: '500px'}}
        />
        <Footer />
      </Slide>
      <Slide>
        <Heading>And This!!</Heading>
        <iframe src={'https://webglsamples.org/field/field.html'} style={{width: '100%', height: '500px'}} />
        <Footer />
      </Slide>
      <Slide>
        <Heading>And This!!!</Heading>
        <iframe
          src={'https://webglsamples.org/electroShock/application.html'}
          style={{width: '100%', height: '500px'}}
        />
        <Footer />
      </Slide>
      <Slide>
        <Center>We're not going to be talking about any of this</Center>
        <Footer />
      </Slide>
      <Slide>
        <Center>So what are we talking about?</Center>
        <Footer />
      </Slide>
      <Slide>
        <Center><Example1 /></Center>
        <Footer />
      </Slide>
      <Slide>
        <Example2 />
        <Footer />
      </Slide>
      <Slide>
        <Example3 />
        <Footer />
      </Slide>
      <Slide>
        <ExampleVideo />
        <Footer />
      </Slide>
      <Slide>
        <ExampleWebcam />
        <Footer />
      </Slide>
      <Slide>
        <ExampleBump />
        <Footer />
      </Slide>
      <Slide>
        <ExampleBump2 />
        <Footer />
      </Slide>
    </Deck>
  );
};

export default App;
