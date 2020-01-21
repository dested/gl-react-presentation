import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import raf from 'raf';
import React, {Component, FC, VideoHTMLAttributes} from 'react';
import videoMP4 from './video.mp4';

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
  regular: {
    // language=GLSL
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform sampler2D texture;
        void main () {
            gl_FragColor = texture2D(texture, uv);
        }
    `,
  },
  invert: {
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D texture;
void main () {
  vec4 color = texture2D(texture, uv);
  gl_FragColor = vec4(1.0 - color.x, 1.0 - color.y, 1.0 - color.z, 1.0);
}
`,
  },
});

// We now uses <Video> in our GL graph.
// The texture we give to <SplitColor> is a (redraw)=><Video> function.
// redraw is passed to Video onFrame event and Node gets redraw each video frame.
export const ExampleVideoFast: FC<{demo: number}> = ({demo}) => {
  let shader: any;
  switch (demo) {
    case 0:
      shader = shaders.regular;
      break;
    case 1:
      shader = shaders.invert;
      break;
    case 2:
      shader = shaders.invertYTexture;
      break;
    case 3:
      shader = shaders.colorsTexture;
      break;
    case 4:
      shader = shaders.funnyColors1Texture;
      break;
    case 5:
      shader = shaders.funnyColors2Texture;
      break;
  }

  return (
    <>
      <Surface width={426} height={240} pixelRatio={1}>
        <Node
          shader={shader}
          uniforms={{
            texture: (redraw: any) => (
              <Video onFrame={redraw} autoPlay loop>
                <source type="video/mp4" src={videoMP4} />
              </Video>
            ),
          }}
        />
      </Surface>
    </>
  );
};
