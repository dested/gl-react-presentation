import {GLSL} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {FC} from 'react';
import {CodePane, Deck, Fill, Fit, Heading, List, ListItem, Quote, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import builtin from './examples/builtin.png';
import bump from './examples/bump.png';
import bumpDetails from './examples/bumpDetails.png';
import confused1 from './examples/confused1.gif';
import confused2 from './examples/confused2.gif';
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
import explode from './examples/explode.gif';
import fun1 from './examples/fun1.webp';
import fun2 from './examples/fun2.gif';
import getout from './examples/getout.gif';
import image from './examples/image.png';
import magic from './examples/magic.gif';
import me from './examples/me.png';
import noonecares from './examples/noonecares.gif';
import orIsIt from './examples/orisit.gif';
import question from './examples/question.gif';
import react from './examples/react.jpg';
import regex from './examples/regex.png';
import relief from './examples/relief.webp';
import {Simple} from './examples/simple';
import thanks from './examples/thanks.webp';
import toomuch from './examples/toomuch.gif';
import videoMP4 from './examples/video.mp4';
import where from './examples/where.gif';

const theme = createTheme(
  {
    back: '#1e2852',
    primary: '#FFBD1C',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const H = ({children, textSize}: any) => (
  <Heading textColor={'primary'} textSize={textSize || '80px'}>
    {children}
  </Heading>
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
        <Slide bgColor={'back'}>
          <H>
            WebGL In React
            <br />
            (& Native)
          </H>
        </Slide>
        <Slide bgColor={'back'}>
          <img src={me} height={800} style={{marginLeft: -100, marginTop: -100}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>So what is this WebGL I keep hearing about?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <Quote style={{fontSize: '60px'}}>
            WebGL is a cross-platform, royalty-free web standard for a low-level 3D graphics API based on OpenGL ES
            2.0o̵̖͇̟̟n̠͈̝͖̼̺̤ ͈͕̤O̖̥̖̮̺̺p̛̘e̝̤̦̟̟n̵̝̮̦͉̙͕̥G̵̙͈̱͖̫L͈̬͉̼͎̫ ̢̮̭̹̜E͜S̞̱͚ͅ,̘̦̟ e͎̫̥̳̖͎̖x̴͍͓̺p̫͖̺o̶̯s̼̞̩e̜̩̥̝͇̝̝d̴ ̯̳̼̼͇t͏̗̘̮̺o͖̭͙͎̠͎̪ ̰̮̺̮̯͈ͅE̷͔̜͓̼C̳̳̣M̶͉͙͙̳̥̗ͅA̝̪S̼̗c̴̞̟̩̩͇̼ͅr̻͟i̩̻̫̬͚p̷̱̻t̝̠͖͘ ̸̼̪v̛ia̭͝ ̭̠̗̭̙t̟̳ͅh̦̱̦͎̦̦e̠̩ H̟̕T̤̭̺̪̻M̨̫͓̲L̥̼̪̲5 ̮̞̺̹͡C̷̜̠̹̯͈a̰̥̕n̫v͎̪̝̭̺̼͢a̠͈̳s̰̦̠ ̛̻e̝̭̝̞̥̻l͏eḿȩ̰̭͇͈̣n̼̼͓͘ͅt̪̝.̼̗̠̦̣͔ ̮͙͔͎̩D͟ev͠e̷̪̲̞l̝̝̱̥̳̟͍o̬̭͇pe̷̙͖̮r͎̠͈͖̗ş̣̬̫̩ ͏̘͍̫̥̘̹f̮̺͓͙̩̲͇a̡̤ṃ̨͙̗̝̦i̮̩̥l̥͇̝i̹a̢̲̙̹̲̪̞r͔ ̦̭͙̱͜w̘̥͇̩̻͓̖͘i̹t̫͎̺͠h̯̭̹ͅ
          </Quote>
        </Slide>
        <Slide bgColor={'back'}>
          <H>What Can WebGL Do?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <H>This</H>
          <iframe
            src={'https://webglsamples.org/aquarium/aquarium.html'}
            style={{border: 0, width: '100%', height: '60vh'}}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>And This</H>
          <iframe src={'https://webglsamples.org/city/city.html'} style={{border: 0, width: '100%', height: '60vh'}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>And This!</H>
          <iframe
            src={'https://webglsamples.org/dynamic-cubemap/dynamic-cubemap.html'}
            style={{border: 0, width: '100%', height: '60vh'}}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>And This!!</H>
          <iframe
            src={'https://webglsamples.org/field/field.html'}
            style={{border: 0, width: '100%', height: '60vh'}}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>And Even This!!</H>
          <iframe
            src={'https://webglsamples.org/electroShock/application.html'}
            style={{border: 0, width: '100%', height: '60vh'}}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>We're not going to be talking about any of that</H>
          <img src={confused1} width={400} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>So what are we talking about?</H>
        </Slide>
        <Slide bgColor={'back'}>
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
        <Slide bgColor={'back'}>
          <H>Lightning fast GPU powered pixel manipulation using Fragment Shaders</H>
        </Slide>
        <Slide bgColor={'back'}>
          <H>So what can fragment shaders do?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <H>This</H>
          <iframe
            style={{border: 0}}
            width="800"
            height="500"
            frameBorder="0"
            src="https://www.shadertoy.com/embed/WtfGDX?gui=true&t=10&paused=false&muted=false"
            allowFullScreen
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>And This</H>
          <iframe
            style={{border: 0}}
            width="800"
            height="500"
            frameBorder="0"
            src="https://www.shadertoy.com/embed/MsGczV?gui=true&t=10&paused=false&muted=false"
            allowFullScreen
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>And This!!</H>
          <iframe
            style={{border: 0}}
            width="800"
            height="500"
            frameBorder="0"
            src="https://www.shadertoy.com/embed/XlcBRX?gui=true&t=10&paused=false&muted=false"
            allowFullScreen
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>And Even This!!</H>
          <iframe
            style={{border: 0}}
            width="800"
            height="500"
            frameBorder="0"
            src="https://www.shadertoy.com/embed/Wly3zt?gui=true&t=10&paused=false&muted=false"
            allowFullScreen
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>We're not going to be talking about any of that</H>
          <img src={confused2} width={400} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>So what are we talking about?</H>
        </Slide>
        <Slide bgColor={'back'}>
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
        <Slide bgColor={'back'}>
          <H>Lightning fast GPU powered pixel manipulation using fragment shaders</H>
        </Slide>
        <Slide bgColor={'back'}>
          <H>What exactly is a fragment shader</H>
        </Slide>
        <Slide bgColor={'back'}>
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <List>
            <ListItem textSize={'70px'} bold textColor={'primary'}>
              Block of code
            </ListItem>
            <ListItem textSize={'70px'} bold textColor={'primary'}>
              Runs on GPU
            </ListItem>
            <ListItem textSize={'70px'} bold textColor={'primary'}>
              C like syntax
            </ListItem>
            <ListItem textSize={'70px'} bold textColor={'primary'}>
              Runs for every pixel
            </ListItem>
          </List>
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`}
          />
        </Slide>
        <Slide bgColor={'back'}>
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
        <Slide bgColor={'back'}>
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 900}}
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
        <Slide bgColor={'back'}>
          <H>WebGL is cool right?</H>
          <img src={noonecares} width={400} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>What about react?</H>
          <img src={react} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>gl-react</H>
          <br />
          <br />
          <br />
          <H textSize={'50px'}>gl-react-dom</H>
          <H textSize={'50px'}>gl-react-native</H>
          <H textSize={'50px'}>gl-react-headless</H>
        </Slide>

        <Slide bgColor={'back'}>
          <Quote style={{fontSize: '70px'}}>
            gl-react is a React library used to write and compose WebGL <i>fragment shaders</i>.
          </Quote>
        </Slide>

        <Slide bgColor={'back'}>
          <H>gl-react is declarative webGL</H>
          <div className={'row'}>
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
            <Simple
              shader={GLSL`precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(0.0, 1.0, 0.0,1.0);
}
`}
            />
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <H>Where's the real magic?</H>
          <img src={where} style={{width: 500}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>Variables</H>
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 900}}
            contentEditable={false}
            source={`uniform float green;
            
void main() {
  gl_FragColor = vec4(0.0, green, 0.0, 1.0);
}`}
          />
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, minWidth: 0, marginTop: 10}}
            contentEditable={false}
            source={`<Surface width={300} height={300}>
  <Node 
    shader={shaders.greenShader} 
    uniforms={{green: greenValue}} 
  />
</Surface>`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <img src={explode} style={{width: 500}} />
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'row'} style={{marginTop: -100}}>
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
        <Slide bgColor={'back'}>
          <H>Let's have fun with animations</H>
          <img src={fun1} width={400} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
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
        <Slide bgColor={'back'}>
          <div className={'row'} style={{marginTop: -100}}>
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

const time = useTimeLoop();
<Surface width={300} height={300}>
  <Node
    shader={shaders.simple}
    uniforms={{blue: 0.5 + 0.5 * Math.cos(time / 500)}}
  />
</Surface>`}
            />
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'row'} style={{marginTop: -100}}>
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
        <Slide bgColor={'back'}>
          <H>What else can we pass in?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <H>Images!</H>
          <img src={image} width={300} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <div style={{marginTop: -100}}>
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
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleImage demo={0} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(texture, uv);`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <CodePane
            lang={'c'}
            style={{fontSize: 30}}
            contentEditable={false}
            source={`
//   Color
//  at pixel         Image  Position  
//     ↓               ↓      ↓
  vec4 c = texture2D(texture, uv);
  gl_FragColor = c;
`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleImage demo={0} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(texture, uv);`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>What else can we do?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleImage demo={2} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(texture, vec2(uv.x, 1.0 - uv.y));`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleImage demo={1} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(texture, 
                         vec2(
                             mod( uv.x * 5.0 , 1.0), 
                             uv.y
                             )
                         );`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleImage demo={10} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(texture, 
                         vec2(
                             mod( uv.x * 5.0 , 1.0), 
                             1.0 - uv.y
                             )
                         );`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleImage demo={3} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`vec4 sample = texture2D(texture, uv);
gl_FragColor = vec4(sample.r, sample.g, sample.b, sample.a);`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleImage demo={5} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`vec4 sample = texture2D(texture, uv);
gl_FragColor = vec4( 
                (sample.r + uv.x) * sample.a,
                (sample.g + uv.y) * sample.a, 
                sample.b,
                sample.a
               )`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleImage demo={6} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`vec4 sample = texture2D(texture, vec2(uv.x, 1.0 - uv.y));
gl_FragColor = vec4( 
                (sample.r + uv.x) * sample.a,
                (sample.g + uv.y) * sample.a, 
                sample.b,
                sample.a
               )`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>What else can we pass?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <H>Video?</H>
          <video autoPlay loop width={1024} height={720} muted>
            <source type="video/mp4" src={videoMP4} />
          </video>
        </Slide>
        <Slide bgColor={'back'}>
          <H>gl-react has native support for video!</H>
          <img src={fun2} width={500} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <video autoPlay loop width={1024 / 3} height={720 / 3} muted>
            <source type="video/mp4" src={videoMP4} />
          </video>
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`import videoMP4 from './video.mp4';

<Surface width={videoWidth} height={videoHeight}>
  <Node shader={shaders.video} uniforms={{ texture: (redraw) => 
    <video onTimeUpdate={redraw} autoPlay loop>
      <source type="video/mp4" src={videoMP4} />
    </video>
  }} />
</Surface>`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>WebGL Video Rendering In All Its Glory</H>
          <ExampleVideoSlow />
        </Slide>
        <Slide bgColor={'back'}>
          <img src={question} height={400} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>onTimeUpdate is slow.</H>
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`//       Trash
//        ↓↓↓
<video onTimeUpdate={redraw} autoPlay loop>
  <source type="video/mp4" src={videoMP4} />
</video>`}
          />
        </Slide>
        <Slide bgColor={'back'}>
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
        <Slide bgColor={'back'}>
          <CodePane
            lang={'jsx'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`import videoMP4 from './video.mp4';

  <Surface width={videoWidth} height={videoHeight}>
    <Node shader={shaders.video} uniforms={{ texture: (redraw) => 
{/* Capital V       */}
{/*    ↓            */}
      <Video onFrame={redraw} autoPlay loop>
        <source type="video/mp4" src={videoMP4} />
      </Video>
    }} />
  </Surface>`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleVideoFast demo={0} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`varying vec2 uv;
uniform sampler2D video;
void main () {
  gl_FragColor = texture2D(video, uv);
}`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>What can we do now?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleVideoFast demo={1} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10}}
            contentEditable={false}
            source={`vec4 color = texture2D(video, uv);
gl_FragColor = vec4(1.0 - color.r, 1.0 - color.g, 1.0 - color.b, 1.0);`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'row'}>
            <ExampleVideo demo={0} />
            <div style={{marginLeft: 10}}>
              <CodePane
                lang={'c'}
                style={{fontSize: 30, minWidth: 1000}}
                contentEditable={false}
                source={`float y = uv.y * 3.0;
vec4 c = texture2D(video, vec2(uv.x, mod(y, 1.0)));
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
                source={`<Surface width={videoWidth} height={videoHeight*3}>
...
</Surface>`}
              />
            </div>
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'row'}>
            <div style={{marginLeft: 10}}>
              <CodePane
                lang={'jsx'}
                style={{fontSize: 30, minWidth: 1000, marginBottom: 10}}
                contentEditable={false}
                source={`<Surface width={videoWidth} height={videoHeight*3}>
...
</Surface>`}
              />
              <CodePane
                lang={'c'}
                style={{fontSize: 30, minWidth: 1000}}
                contentEditable={false}
                source={`float y = uv.y * 3.0;
vec4 c = texture2D(video, vec2(uv.x, mod(y, 1.0)));
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
        <Slide bgColor={'back'}>
          <H>Magic</H>
          <img src={magic} width={700} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'row'}>
            <ExampleVideo demo={1} />
            <CodePane
              lang={'c'}
              style={{fontSize: 30, minWidth: 1100}}
              contentEditable={false}
              source={`float y = uv.y * 3.0; //0 3 6 9
y = mod(y, 1.0); // 0 1 2 3
vec4 c = texture2D(video, vec2(uv.x, y)); // sample x,y
gl_FragColor = vec4(
  c.r,
  c.g,
  c.b,
  1.0); // draw color at canvas position
`}
            />
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'row'}>
            <ExampleVideo demo={2} />
            <div style={{marginLeft: 10}}>
              <CodePane
                lang={'c'}
                style={{fontSize: 25, minWidth: 1000}}
                contentEditable={false}
                source={`float r=0.0;
float g=0.0;
if (y > 2.0 && y < 3.0){
    r = c.r;
} else {
    r = 0.0;
}
if (y > 1.0 && y < 2.0){
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
        <Slide bgColor={'back'}>
          <H>If statements are the devil</H>
          <img src={devil} height={400} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>Built In Functions</H>
          <img src={builtin} width={200} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>step(edge, value)</H>
          <CodePane
            lang={'c'}
            style={{fontSize: 30, marginTop: 10, minWidth: 1000}}
            contentEditable={false}
            source={`
//  below 2.0 is zero      above 3.0 is zero
                ↓                ↓
r = c.r * step(2.0, y) * step(y, 3.0)
`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'row'}>
            <ExampleVideo demo={0} />
            <div style={{marginLeft: 10}}>
              <CodePane
                lang={'c'}
                style={{fontSize: 30, minWidth: 1000}}
                contentEditable={false}
                source={`float y = uv.y * 3.0;
vec4 c = texture2D(video, vec2(uv.x, mod(y, 1.0)));
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
        <Slide bgColor={'back'}>
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
        <Slide bgColor={'back'}>
          <H>What else?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <H>Isn't WebCam just a video source?</H>
          <H textSize={'20px'}>(not really but sorta)</H>
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleWebcam demo={0} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 0}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(webcam, uv)`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>What can do now?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleWebcam demo={1} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 1200}}
            contentEditable={false}
            source={`gl_FragColor = texture2D(t, vec2(uv.x, 1.0 - uv.y))`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleWebcam demo={2} />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 1200}}
            contentEditable={false}
            source={`vec4 c = texture2D(t, uv);
gl_FragColor = vec4(
                  1.0-c.r,
                  1.0-c.g,
                  1.0-c.b,
                  1.0
               );`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleWebcamSplit />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 1200}}
            contentEditable={false}
            source={`uniform float mouseX;
void main () { 
    vec4 c = texture2D(t, uv);
    // if statements are the devil
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
<Node uniforms={{mouseX: position.x / canvasWidth}} />`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>What else?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <H>Did someone say Texture Mapping?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'col'}>
            <H style={{marginBottom: 20}} textSize={'50px'}>
              To the untrained eye this looks like a regular PNG
            </H>
            <img src={bump} style={{height: 400}} />
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'col'}>
            <H style={{marginBottom: 20}}>It is a regular PNG</H>
            <img src={bumpDetails} style={{height: 600}} />
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'col'}>
            <H style={{marginBottom: 20}}>Or is it?</H>
            <img src={orIsIt} style={{height: 600}} />
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'col'}>
            <H style={{marginBottom: 20}}>Yes</H>
            <img src={bumpDetails} style={{height: 600}} />
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <div className={'col'}>
            <img src={bump} style={{height: 400}} />
            <H style={{marginTop: 20}} textSize={'50px'}>
              But its also a 2d array of 0-1 values
            </H>
          </div>
        </Slide>
        <Slide bgColor={'back'}>
          <H>What can we do with that?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleBump />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 1500}}
            contentEditable={false}
            source={`precision highp float;
varying vec2 uv;
uniform sampler2D webcam, bump;
void main () {
    float intensity=texture2D(bump, uv).r;
    vec4 col=texture2D(webcam, uv);
    gl_FragColor = vec4(
                    col.r*intensity, 
                    col.g*intensity, 
                    col.b*intensity, 
                    1.0
                   );
}`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <ExampleBump2 />
          <CodePane
            lang={'c'}
            style={{fontSize: 30, minWidth: 1500}}
            contentEditable={false}
            source={`varying vec2 uv;
uniform sampler2D webcam, bump;
void main () {
  vec4 intensity=texture2D(bump, uv);
  gl_FragColor = texture2D(t, vec2( uv.x*intensity.r, uv.y+intensity.r ));
}`}
          />
        </Slide>
        <Slide bgColor={'back'}>
          <H>Shaders are a lot like Regex</H>
          <img src={regex} height={300} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>
            No one writes them, everyone just <span style={{textDecoration: 'line-through'}}>steals</span>borrows them{' '}
          </H>
          <img src={regex} height={300} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>What else can we do?</H>
        </Slide>
        <Slide bgColor={'back'}>
          <H>I know that was a lot</H>
          <img src={toomuch} height={300} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>But hopefully now you're less scared</H>
          <img src={relief} height={300} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>
            So get out there and start <span style={{textDecoration: 'line-through'}}>stealing</span>borrowing shaders
            in your project today!
          </H>
          <img src={getout} height={300} style={{marginTop: 20}} />
        </Slide>
        <Slide bgColor={'back'}>
          <H>Thanks!</H>
          <img src={thanks} height={400} style={{marginTop: 20}} />
        </Slide>
      </Deck>
    </>
  );
};

export default App;
