import {GLSL} from 'gl-react';
import React, {FC} from 'react';
import {CodePane, Deck, Fill, Fit, Heading, Quote, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import {Example0} from './examples/example0';
import {Example1} from './examples/example1';
import {Example2} from './examples/example2';
import {Example3} from './examples/example3';
import {ExampleBump} from './examples/exampleBump';
import {ExampleBump2} from './examples/exampleBump2';
import {ExampleVideo} from './examples/exampleVideo';
import {ExampleWebcam} from './examples/exampleWebcam';
import {ExamplePixelate} from './examples/pixelate';
import {Simple} from './examples/simple';

const theme = createTheme(
  {
    back: '#1e2852',
    primary: '#f04d21',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const App: React.FC = () => {
  return (
    <>
      <div className={'footer'}>@dested</div>
      <Deck autoplay={false} theme={theme} showFullscreenControl={false} contentWidth={'90vw'}>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>WebGL In React (& Native)</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Who Am I?</Heading>
          <iframe src={'https://dested.com'} style={{width: '100%', height: '60vh'}} />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>So what is this WebGL I keep hearing about?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Quote style={{fontSize: '60px'}}>
            WebGL is a cross-platform, royalty-free web standard for a low-level 3D graphics API based on OpenGL ES 2.0
          </Quote>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>What Can WebGL Do?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>This</Heading>
          <iframe src={'https://webglsamples.org/aquarium/aquarium.html'} style={{width: '100%', height: '60vh'}} />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>And This</Heading>
          <iframe src={'https://webglsamples.org/city/city.html'} style={{width: '100%', height: '60vh'}} />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>And This!</Heading>
          <iframe
            src={'https://webglsamples.org/dynamic-cubemap/dynamic-cubemap.html'}
            style={{width: '100%', height: '60vh'}}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>And This!!</Heading>
          <iframe src={'https://webglsamples.org/field/field.html'} style={{width: '100%', height: '60vh'}} />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>And Even This!!</Heading>
          <iframe
            src={'https://webglsamples.org/electroShock/application.html'}
            style={{width: '100%', height: '60vh'}}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>We're not going to be talking about any of that</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>So what are we talking about?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Example0 />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Lightning fast GPU powered pixel manipulation</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>gl-react</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Quote style={{fontSize: '60px'}}>
            gl-react is a React library to write and compose WebGL fragment shaders.
          </Quote>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>gl-react-dom</Heading>
          <Heading textColor={'primary'}>gl-react-native</Heading>
          <Heading textColor={'primary'}>gl-react-headless</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Shader you say?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>
            <a style={{color: 'white'}} href={'https://www.shadertoy.com/view/WtfGDX'}>
              This
            </a>
          </Heading>
          <Heading textColor={'primary'}>
            <a style={{color: 'white'}} href={'https://www.shadertoy.com/view/MsGczV'}>
              And This
            </a>
          </Heading>
          <Heading textColor={'primary'}>
            <a style={{color: 'white'}} href={'https://www.shadertoy.com/view/XlcBRX'}>
              And This!!
            </a>
          </Heading>
          <Heading textColor={'primary'}>
            <a style={{color: 'white'}} href={'https://www.shadertoy.com/view/Wly3zt'}>
              And Even This!!
            </a>
          </Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>We're not going to be talking about any of that</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>So what are we talking about?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Example0 />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Lightning fast GPU powered pixel manipulation</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>What exactly is a fragment shader</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'c'}
            style={{fontSize: 30}}
            contentEditable={false}
            source={`void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0,1.0);
}`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>A block of code that gets executed for EVERY PIXEL in the canvas</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'c'}
            style={{fontSize: 30}}
            contentEditable={false}
            source={`void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`}
          />
          <Simple
            shader={GLSL`
precision highp float;
void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'c'}
            style={{fontSize: 30}}
            contentEditable={false}
            source={`varying vec2 uv;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}`}
          />
          <Simple
            shader={GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}
`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>gl-react</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30}}
            contentEditable={false}
            source={`let shaders = Shaders.create({
  simple: {
    frag: GLSL\`
varying vec2 uv;
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0,1.0);
}\`
  }
});

<Surface width={300} height={300}>
  <Node shader={shaders.simple} />
</Surface>`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Example1 />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Example2 />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Example3 />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleVideo />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleWebcam />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleBump />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleBump2 />
        </Slide>
      </Deck>
    </>
  );
};

export default App;
