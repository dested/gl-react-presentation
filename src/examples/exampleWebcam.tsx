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
  Persistence: {
    // language=GLSL
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform sampler2D t, back;
        uniform float persistence;
        void main () {
            gl_FragColor = vec4(mix(
            texture2D(t, uv),
            texture2D(back, uv+vec2(0.0, 0.005)),
            persistence
            ).rgb, 1.0);
        }`,
  },
  Persistence2: {
    // language=GLSL
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform sampler2D t;
        void main () {
            vec4 c = texture2D(t, vec2(uv.x, 1.0-uv.y));
            gl_FragColor = c;
        }`,
  },
  Negative: {
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

const Persistence = ({
  children,
  persistence,
}: {
  children: (redraw: (time: number) => void) => void;
  persistence: number;
}) => <Node shader={shaders.Negative} backbuffering uniforms={{t: children, back: Uniform.Backbuffer, persistence}} />;

export class ExampleWebcam extends Component<{persistence: number}> {
  render() {
    const {persistence} = this.props;
    return (
      <Surface width={400} height={300}>
        <LinearCopy>
          <Persistence persistence={persistence}>
            {redraw => (
              <Video onFrame={redraw} autoPlay>
                <WebCamSource />
              </Video>
            )}
          </Persistence>
        </LinearCopy>
      </Surface>
    );
  }
  static defaultProps = {
    persistence: 0.8,
  };
}
