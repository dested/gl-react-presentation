import {GLSL, LinearCopy, Node, Shaders, Uniform} from 'gl-react';
import {Surface} from 'gl-react-dom';
import raf from 'raf';
import React, {Component, useEffect, useRef, VideoHTMLAttributes} from 'react';
import bump from './bump.png';

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
        uniform sampler2D t, bump;
        uniform float persistence;
        void main () {
            float intensity=texture2D(bump, uv).r;
            vec4 col=texture2D(t, uv);
            
            gl_FragColor = vec4(col.r*intensity,col.g*intensity,col.b*intensity, 1.0);
        }`,
  },
});

const Persistence = ({
  children,
  persistence,
}: {
  children: (redraw: (time: number) => void) => void;
  persistence: number;
}) => <Node shader={shaders.Persistence} backbuffering uniforms={{t: children, bump, persistence}} />;

export class ExampleBump extends Component<{persistence: number}> {
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
