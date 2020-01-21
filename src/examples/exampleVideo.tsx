import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import raf from 'raf';
import React, {Component, FC, VideoHTMLAttributes} from 'react';
import videoMP4 from './video.mp4';

// We implement a component <Video> that is like <video>
// but provides a onFrame hook so we can efficiently only render
// if when it effectively changes.
export class Video extends Component<{onFrame: () => void} & VideoHTMLAttributes<HTMLVideoElement>> {
  private raf: number;
  private currentTime: number;
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
        this.props.onFrame();
      }
    };
    this.raf = raf(loop);
  }

  componentWillUnmount() {
    raf.cancel(this.raf);
  }

  render() {
    const {onFrame, ...rest} = this.props;
    return <video {...rest} ref={this.videoRef} />;
  }
}

// Our example will simply split R G B channels of the video.
const shaders = Shaders.create({
  SplitColor1: {
    // language=GLSL
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform sampler2D children;
        void main () {
            float y = uv.y * 3.0;
            vec4 c = texture2D(children, vec2(uv.x, mod(y, 1.0)));
            gl_FragColor = vec4(
            c.r * step(2.0, y) * step(y, 3.0),
            c.g * step(1.0, y) * step(y, 2.0),
            c.b * step(0.0, y) * step(y, 1.0),
            1.0);
        }
    `,
  },
  SplitColor2: {
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D children;
void main () {
  float y = uv.y * 3.0;
  vec4 c = texture2D(children, vec2(uv.x, mod(y, 1.0)));
  gl_FragColor = vec4(
    c.r,
    c.g,
    c.b,
    1.0);
}
`,
  },
  SplitColor3: {
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D children;
void main () {
    float y = uv.y * 3.0;
    vec4 c = texture2D(children, vec2(uv.x, mod(y, 1.0)));

    float r=0.0;
    float g=0.0;
    float b=0.0;
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
    1.0);
}
`,
  },
  SplitColor4: {
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D children;
void main () {
  vec3 pixel_color;
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
  gl_FragColor = vec4(5.0*pixel_color, 1.0);
}
`,
  },
  // ^NB perf: in fragment shader paradigm, we want to avoid code branch (if / for)
  // and prefer use of built-in functions and just giving the GPU some computating.
  // step(a,b) is an alternative to do if(): returns 1.0 if a<b, 0.0 otherwise.
});
const SplitColor = ({children, demo}: {demo: number; children: (redraw: () => void) => void}) => {
  let shader: any;
  switch (demo) {
    case 0:
      shader = shaders.SplitColor1;
      break;
    case 1:
      shader = shaders.SplitColor2;
      break;
    case 2:
      shader = shaders.SplitColor3;
      break;
    case 3:
      shader = shaders.SplitColor4;
      break;
  }
  return <Node shader={shader} uniforms={{children}} />;
};

// We now uses <Video> in our GL graph.
// The texture we give to <SplitColor> is a (redraw)=><Video> function.
// redraw is passed to Video onFrame event and Node gets redraw each video frame.
export const ExampleVideo: FC<{demo: number}> = ({demo}) => (
  <>
    <Surface width={426} height={720} pixelRatio={1}>
      <SplitColor demo={demo}>
        {redraw => (
          <Video onFrame={redraw} autoPlay loop>
            <source type="video/mp4" src={videoMP4} />
          </Video>
        )}
      </SplitColor>
    </Surface>
  </>
);
