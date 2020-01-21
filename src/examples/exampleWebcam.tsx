import {GLSL, LinearCopy, Node, Shaders, Uniform} from 'gl-react';
import {Surface} from 'gl-react-dom';
import raf from 'raf';
import React, {Component, useEffect, useRef, VideoHTMLAttributes} from 'react';

const VideoContext = React.createContext<React.RefObject<HTMLVideoElement>>(null);

export const Video = ({onFrame, ...rest}: {onFrame: (n: number) => void} & VideoHTMLAttributes<HTMLVideoElement>) => {
  const video = useRef<HTMLVideoElement>();

  useEffect(() => {
    let handle: number;
    let lastTime: number;

    const loop = () => {
      handle = raf(loop);
      if (!video.current) {
        return;
      }
      const currentTime = video.current.currentTime;
      // Optimization that only call onFrame if time changes
      if (currentTime !== lastTime) {
        lastTime = currentTime;
        onFrame(currentTime);
      }
    };
    handle = raf(loop);

    return () => raf.cancel(handle);
  }, [onFrame]);

  return (
    <VideoContext.Provider value={video}>
      <video {...rest} ref={video} />
    </VideoContext.Provider>
  );
};

// We can give our [<Video>](/blurvideo) component a <WebCamSource> to have webcam stream!
const WebCamSourceR = ({videoRef}: {videoRef: React.RefObject<HTMLVideoElement>}): any => {
  useEffect(() => {
    navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
  }, [videoRef]);
  return null;
};

export const WebCamSource = () => (
  <VideoContext.Consumer>{videoRef => <WebCamSourceR videoRef={videoRef} />}</VideoContext.Consumer>
);

const shaders = Shaders.create({
  regular: {
    // language=GLSL
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform sampler2D t;
        void main () {
            gl_FragColor = texture2D(t, vec2(uv.x, uv.y));
        }`,
  },
  invert: {
    // language=GLSL
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform sampler2D t;
        void main () {
            gl_FragColor = texture2D(t, vec2(uv.x, 1.0-uv.y));
        }`,
  },
  negative: {
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
void main () { 
    vec4 c = texture2D(t, vec2(uv.x, uv.y));
    gl_FragColor = vec4(
    1.0-c.r,
    1.0-c.g,
    1.0-c.b,
    1.0);
}`,
  },
});

export class ExampleWebcam extends Component<{demo: number}> {
  render() {
    const {demo} = this.props;

    let shader: any;
    switch (demo) {
      case 0:
        shader = shaders.regular;
        break;
      case 1:
        shader = shaders.invert;
        break;
      case 2:
        shader = shaders.negative;
        break;
    }

    return (
      <Surface width={400} height={300}>
        <Node
          shader={shader}
          uniforms={{
            t: (redraw: any) => (
              <Video onFrame={redraw} autoPlay>
                <WebCamSource />
              </Video>
            ),
          }}
        />
      </Surface>
    );
  }
  static defaultProps = {
    persistence: 0.8,
  };
}
