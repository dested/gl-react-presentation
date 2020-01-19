import React from 'react';
import {Box, CodePane, Deck, FlexBox, FullScreen, Heading, Progress, Slide, Text} from 'spectacle';
import {Example1} from './examples/example1';
import {Example2} from './examples/example2';
import {Example3} from './examples/example3';
import {ExampleVideo} from './examples/exampleVideo';

const theme = {};
const template = (
  <FlexBox justifyContent={'space-between'} position={'absolute'} bottom={0} width={1}>
    <Box padding={10} key={'progress-templ'}>
      <Progress />
    </Box>
    <Box padding={10} key={'fullscreen-templ'}>
      <FullScreen />
    </Box>
  </FlexBox>
);

const App: React.FC = () => {
  return (
    <Deck template={template} loop={false} theme={theme}>
      <Slide>
        <Heading>hi</Heading>
        <Text>hi</Text>
        <CodePane source="CodePane" lang="js">
          hi
        </CodePane>
      </Slide>
      <Slide>
        <Example1 />
        <CodePane source="CodePane" lang="js">
          hi
        </CodePane>
      </Slide>
      <Slide>
        <Example2 />
        <CodePane source="CodePane" lang="js">
          hi
        </CodePane>
      </Slide>
      <Slide>
        <Example3 />
        <CodePane source="CodePane" lang="js">
          hi
        </CodePane>
      </Slide>
      <Slide>
        <ExampleVideo />
        <CodePane source="CodePane" lang="js">
          hi
        </CodePane>
      </Slide>
    </Deck>
  );
};

export default App;
