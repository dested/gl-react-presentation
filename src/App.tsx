import {GLSL} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {FC} from 'react';
import {CodePane, Deck, Fill, Fit, Heading, List, ListItem, Quote, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import bump from './examples/bump.png';
import devil from './examples/devil.gif';
import {ExampleBump} from './examples/exampleBump';
import {ExampleBump2} from './examples/exampleBump2';
import {ExampleImage} from './examples/exampleImage';
import {ExamplePixelate} from './examples/examplePixelate';
import {ExamplePrettyBlue} from './examples/examplePrettyBlue';
import {ExampleSlider} from './examples/exampleSlider';
import {ExampleVideo, Video} from './examples/exampleVideo';
import {ExampleVideoFast} from './examples/exampleVideoFast';
import {ExampleVideoSlow} from './examples/exampleVideoSlow';
import {ExampleWebcam} from './examples/exampleWebcam';
import {ExampleWebcamSplit} from './examples/exampleWebcamSplit';
import image from './examples/image.png';
import question from './examples/question.gif';
import {Simple} from './examples/simple';
import videoMP4 from './examples/video.mp4';

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
      <Deck
        autoplay={false}
        theme={theme}
        showFullscreenControl={false}
        contentWidth={((window.innerWidth * 0.8) as unknown) as string}>
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
          <Simple
            shader={GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, 0.1,1.0);
}
`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Lightning fast GPU powered pixel manipulation</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'} textSize={'40px'}>
            Powered By:
          </Heading>
          <Heading textColor={'primary'}>gl-react</Heading>
          <br />
          <br />
          <br />
          <Heading textColor={'primary'} textSize={'50px'}>
            gl-react-dom
          </Heading>
          <Heading textColor={'primary'} textSize={'50px'}>
            gl-react-native
          </Heading>
          <Heading textColor={'primary'} textSize={'50px'}>
            gl-react-headless
          </Heading>
        </Slide>

        <Slide bgColor={'back'} textColor={'primary'}>
          <Quote style={{fontSize: '70px'}}>
            gl-react is a React library to write and compose WebGL fragment shaders.
          </Quote>
        </Slide>

        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>So what can fragment shaders do?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>This</Heading>
          <iframe
            width="800"
            height="500"
            frameBorder="0"
            src="https://www.shadertoy.com/embed/WtfGDX?gui=true&t=10&paused=false&muted=false"
            allowFullScreen
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>And This</Heading>
          <iframe
            width="800"
            height="500"
            frameBorder="0"
            src="https://www.shadertoy.com/embed/MsGczV?gui=true&t=10&paused=false&muted=false"
            allowFullScreen
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>And This!!</Heading>
          <iframe
            width="800"
            height="500"
            frameBorder="0"
            src="https://www.shadertoy.com/embed/XlcBRX?gui=true&t=10&paused=false&muted=false"
            allowFullScreen
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>And Even This!!</Heading>
          <iframe
            width="800"
            height="500"
            frameBorder="0"
            src="https://www.shadertoy.com/embed/Wly3zt?gui=true&t=10&paused=false&muted=false"
            allowFullScreen
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>We're not going to be talking about any of that</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>So what are we talking about?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Simple
            shader={GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, 0.1,1.0);
}
`}
          />
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
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <List textColor={'primary'}>
            <ListItem textSize={'90px'} bold>
              Block of code
            </ListItem>
            <ListItem textSize={'90px'} bold>
              C like syntax
            </ListItem>
            <ListItem textSize={'90px'} bold>
              Runs on GPU
            </ListItem>
            <ListItem textSize={'90px'} bold>
              Runs for every pixel
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`void main() {
//                     R    G    B    A         
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
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`varying vec2 uv;
void main() {
//                      R     G    B    A         
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
          <Heading textColor={'primary'}>Declarative WebGL</Heading>
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`let shaders = Shaders.create({
  simple: {
    frag: GLSL\`
varying vec2 uv;
void main() {
  gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
}\`
  }
});

<Surface width={300} height={300}>
  <Node shader={shaders.simple} />
</Surface>`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Simple
            shader={GLSL`precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(0.0, 1.0, 0.0,1.0);
}
`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Variables</Heading>
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`uniform float green;
            
void main() {
  gl_FragColor = vec4(0.0, green, 0.0, 1.0);
}`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Variables</Heading>
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`<Surface width={300} height={300}>
  <Node 
    shader={shaders.greenShader} 
    uniforms={{green: greenValue}} 
  />
</Surface>`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'row'}>
            <ExampleSlider />
            <CodePane
              lang={'jsx'}
              style={{fontSize: 30, minWidth: 0, maxWidth: 10000}}
              contentEditable={false}
              source={`let shaders = Shaders.create({
  simple: {
    frag: GLSL\`
uniform float green;
void main() {
  gl_FragColor = vec4(0.0, green, 0.0, 1.0);
}
\`
  }
});

const [green, setGreen] = useState(0.8);
<Surface width={300} height={300}>
  <Node shader={shaders.green} uniforms={{green}} />
</Surface>
<input type="range" value={green} onChange={e=> setGreen(e.target.valueAsNumber)} />
`}
            />
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'js'}
            style={{fontSize: 20, minWidth: 0}}
            contentEditable={false}
            source={`function useTimeLoop(refreshRate = 60): number {
  const [time, setTime] = useState(0);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let startTime = 0, lastTime = 0;
    const interval = 1000 / refreshRate;
    lastTime = -interval;
    const loop = (t) => {
      requestAnimationFrame(loop);
      if (!startTime) {
        startTime = t;
      }
      if (t - lastTime > interval) {
        lastTime = t;
        setTime(t - startTime);
        setTick(tick + 1);
      }
    };
    requestAnimationFrame(loop);
  }, [refreshRate]);

  return time;
}`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'row'}>
            <ExamplePrettyBlue fancy={false} />
            <CodePane
              lang={'jsx'}
              style={{fontSize: 30, minWidth: 0, maxWidth: 10000}}
              contentEditable={false}
              source={`let shaders = Shaders.create({
  simple: {
    frag: GLSL\`
uniform float blue;
void main() {
  gl_FragColor = vec4(0.0, 0.0, blue, 1.0);
}\`
  }
});

const time = useTimeLoop(60);
<Surface width={300} height={300}>
  <Node
    shader={shaders.simple}
    uniforms={{blue: 0.5 + 0.5 * Math.cos(time / 500)}}
  />
</Surface>`}
            />
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'row'}>
            <ExamplePrettyBlue fancy={true} />
            <CodePane
              lang={'jsx'}
              style={{fontSize: 30, minWidth: 0, maxWidth: 10000}}
              contentEditable={false}
              source={`let shaders = Shaders.create({
  fancy: {
    frag: GLSL\`uniform float blue;
varying vec2 uv;

void main() {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}\`
  }
});

const time = useTimeLoop(60);
<Surface width={300} height={300}>
  <Node
    shader={shaders.fancy}
    uniforms={{blue: 0.5 + 0.5 * Math.cos(time / 500)}}
  />
</Surface>`}
            />
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>What else can we pass in?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Images!</Heading>
          <img src={image} width={200} height={200} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'c'}
            style={{fontSize: 30}}
            contentEditable={false}
            source={`uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  vec4 c = texture2D(texture, uv);
  gl_FragColor = c;
}
`}
          />
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`import image from './image.png';

<Surface width={300} height={300}>
    <Node shader={shaders.simpleTexture} uniforms={{texture: image}} />
</Surface>`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleImage demo={0} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(texture, uv);`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'c'}
            style={{fontSize: 30}}
            contentEditable={false}
            source={`
//   Color
//  at pixel         Image  Position  
//     V               V       V
  vec4 c = texture2D(texture, uv);
  gl_FragColor = c;
`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleImage demo={0} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(texture, uv);`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleImage demo={2} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(texture, vec2(uv.x, 1.0 - uv.y));`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleImage demo={1} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(texture, vec2(mod(uv.x*5.0,1.0), uv.y));`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleImage demo={3} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`
            vec4 sample = texture2D(texture, uv);
            gl_FragColor = vec4(sample.x, sample.y, sample.z, sample.w);`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleImage demo={4} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`
            vec4 sample = texture2D(texture, uv);
            gl_FragColor = vec4(sample.x, sample.x, sample.x, sample.w);`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleImage demo={5} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`vec4 sample = texture2D(texture, uv);
gl_FragColor = vec4( 
                (sample.x + uv.x) * sample.w,
                (sample.y + uv.y) * sample.w, 
                sample.z,
                sample.w
               )`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Video?</Heading>
          <video autoPlay loop width={1024} height={720} muted>
            <source type="video/mp4" src={videoMP4} />
          </video>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Native Support For Video!</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`import videoMP4 from './video.mp4';

<Surface width={426} height={240} pixelRatio={1}>
  <Node shader={shaders.video} uniforms={{ texture: (redraw) => 
    <video onTimeUpdate={redraw} autoPlay loop>
      <source type="video/mp4" src={videoMP4} />
    </video>
  }} />
</Surface>`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleVideoSlow />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <img src={question} height={400} />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>onTimeUpdate is slow.</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'jsx'}
            style={{fontSize: 20, marginTop: -100}}
            contentEditable={false}
            source={`export class Video extends Component {
  private videoRef = React.createRef<HTMLVideoElement>();
  componentDidMount() {
    const loop = () => {
      this.raf = raf(loop);
      if (!this.videoRef.current) {
        return;
      }
      const currentTime = this.videoRef.current.currentTime;
      // Optimization that only call onFrame if time changes
      if (currentTime !== this.currentTime) {
        this.currentTime = currentTime;
        
        //           THIS
        this.props.onFrame();
        //           THIS
        
      }
    };
    this.raf = raf(loop);
  }
  componentWillUnmount() {raf.cancel(this.raf);}
  render() {
    const {onFrame, ...rest} = this.props;
    return <video {...rest} ref={this.videoRef} />;
  }
}
`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`import videoMP4 from './video.mp4';

<Surface width={426} height={240} pixelRatio={1}>
  <Node shader={shaders.video} uniforms={{ texture: (redraw) => 
    <Video onFrame={redraw} autoPlay loop>
      <source type="video/mp4" src={videoMP4} />
    </Video>
  }} />
</Surface>`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleVideoFast demo={0} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`varying vec2 uv;
uniform sampler2D texture;
void main () {
  gl_FragColor = texture2D(texture, uv);
}`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleVideoFast demo={1} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`vec4 color = texture2D(texture, uv);
gl_FragColor = vec4(1.0 - color.x, 1.0 - color.y, 1.0 - color.z, 1.0);
`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'row'}>
            <ExampleVideo demo={0} />
            <div style={{marginLeft: 10}}>
              <CodePane
                lang={'c'}
                style={{fontSize: 30, minWidth: 1000}}
                contentEditable={false}
                source={`float y = uv.y * 3.0;
vec4 c = texture2D(texture, vec2(uv.x, mod(y, 1.0)));
gl_FragColor = vec4(
  c.r * step(2.0, y) * step(y, 3.0),
  c.g * step(1.0, y) * step(y, 2.0),
  c.b * step(0.0, y) * step(y, 1.0),
  1.0);
`}
              />
              <CodePane
                lang={'jsx'}
                style={{fontSize: 30, minWidth: 1000, marginTop: 10}}
                contentEditable={false}
                source={`<Surface width={426} height={240*3} pixelRatio={1}>
...
</Surface>`}
              />
            </div>
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'row'}>
            <ExampleVideo demo={1} />
            <CodePane
              lang={'c'}
              style={{fontSize: 30, minWidth: 1000}}
              contentEditable={false}
              source={`float y = uv.y * 3.0; //0 3 6 9
float y = mod(y, 1.0); // 0 1 2 3
vec4 c = texture2D(texture, vec2(uv.x, y)); // sample x,y
gl_FragColor = vec4(
  c.r,
  c.g,
  c.b,
  1.0); // draw color at canvas position
`}
            />
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'row'}>
            <ExampleVideo demo={2} />
            <div style={{marginLeft: 10}}>
              <CodePane
                lang={'c'}
                style={{fontSize: 25, minWidth: 1000}}
                contentEditable={false}
                source={`float r=0.0;
float g=0.0;
if(y > 2.0 && y < 3.0){
    r = c.r;
} else {
    r = 0.0;
}
if(y > 1.0 && y < 2.0){
    g = c.g;
} else {
    g = 0.0;
}

gl_FragColor = vec4(
                      r,
                      g,
                      c.b * step(0.0, y) * step(y, 1.0),
                      1.0
                   );
`}
              />
            </div>
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>If statements are the devil</Heading>
          <img src={devil} height={400} />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>step(edge, value)</Heading>
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10, minWidth: 1000}}
            contentEditable={false}
            source={`
//  below 2.0 is zero      above 3.0 is zero
                V                 V
r = c.r * step(2.0, y) * step(y, 3.0)
`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'row'}>
            <ExampleVideo demo={0} />
            <div style={{marginLeft: 10}}>
              <CodePane
                lang={'c'}
                style={{fontSize: 30, minWidth: 1000}}
                contentEditable={false}
                source={`float y = uv.y * 3.0;
vec4 c = texture2D(texture, vec2(uv.x, mod(y, 1.0)));
gl_FragColor = vec4(
  c.r * step(2.0, y) * step(y, 3.0),
  c.g * step(1.0, y) * step(y, 2.0),
  c.b * step(0.0, y) * step(y, 1.0),
  1.0);
`}
              />
            </div>
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'row'}>
            <ExampleVideo demo={3} />
            <div style={{marginLeft: 10}}>
              <CodePane
                lang={'c'}
                style={{fontSize: 20, minWidth: 1000}}
                contentEditable={false}
                source={`vec3 pixel_color;
float u_resolution = 1000.0;  
pixel_color += -1.0 * texture2D(children, uv + vec2(-1, -1) / u_resolution).rgb;
pixel_color += -1.0 * texture2D(children, uv + vec2(-1, 0) / u_resolution).rgb;
pixel_color += -1.0 * texture2D(children, uv + vec2(-1, 1) / u_resolution).rgb;
pixel_color += -1.0 * texture2D(children, uv + vec2(0, -1) / u_resolution).rgb;
pixel_color += 8.0 * texture2D(children, uv + vec2(0, 0) / u_resolution).rgb;
pixel_color += -1.0 * texture2D(children, uv + vec2(0, 1) / u_resolution).rgb;
pixel_color += -1.0 * texture2D(children, uv + vec2(1, -1) / u_resolution).rgb;
pixel_color += -1.0 * texture2D(children, uv + vec2(1, 0) / u_resolution).rgb;
pixel_color += -1.0 * texture2D(children, uv + vec2(1, 1) / u_resolution).rgb;

// Use the most extreme color value
float min_value = min(pixel_color.r, min(pixel_color.g, pixel_color.b));
float max_value = max(pixel_color.r, max(pixel_color.g, pixel_color.b));

if (abs(min_value) > abs(max_value)) {
    pixel_color = vec3(min_value);
} else {
    pixel_color = vec3(max_value);
}

// Rescale the pixel color using the mouse y position 
gl_FragColor = vec4(5.0*pixel_color, 1.0);`}
              />
            </div>
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>What else?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Isn't WebCam just a video source?</Heading>
          <Heading textColor={'primary'} textSize={'20px'}>
            (not really but sorta)
          </Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleWebcam demo={0} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(t, vec2(uv.x, uv.y))`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleWebcam demo={1} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 1200}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(t, vec2(uv.x, 1.0 - uv.y))`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleWebcam demo={2} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 1200}}
            contentEditable={false}
            source={`vec4 c = texture2D(t, vec2(uv.x, uv.y));
gl_FragColor = vec4(
                  1.0-c.r,
                  1.0-c.g,
                  1.0-c.b,
                  1.0
               );`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleWebcamSplit />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 1200}}
            contentEditable={false}
            source={`uniform float mouseX;
void main () { 
    vec4 c = texture2D(t, uv);
    if (uv.x > mouseX){
        gl_FragColor = vec4(c.r,c.g,c.b,1.0);
    } else {
        gl_FragColor = vec4(1.0-c.r,1.0-c.g,1.0-c.b,1.0);
    }
}`}
          />
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, minWidth: 1200}}
            contentEditable={false}
            source={`const position = useMousePosition(surface);
{mouseX: position.x / canvasWidth}`}
          />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>What else?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <Heading textColor={'primary'}>Did someone say Texture Mapping?</Heading>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'col'}>
            <img src={bump} style={{height: 400}} />
            <Heading textColor={'primary'} style={{marginTop: 20}} textSize={'50px'}>
              This is a regular ole png. Not a special png.
            </Heading>
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <div className={'col'}>
            <img src={bump} style={{height: 400}} />
            <Heading textColor={'primary'} style={{marginTop: 20}} textSize={'50px'}>
              This is a very special 2d array of 0-1 values
            </Heading>
          </div>
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleBump />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          <ExampleBump2 />
        </Slide>
        <Slide bgColor={'back'} textColor={'primary'}>
          transition between
        </Slide>
      </Deck>
    </>
  );
};

export default App;
