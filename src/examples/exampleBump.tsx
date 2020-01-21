import {GLSL, LinearCopy, Node, Shaders, Uniform} from 'gl-react';
import {Surface} from 'gl-react-dom';
import raf from 'raf';
import React, {Component, useEffect, useRef, VideoHTMLAttributes} from 'react';
import bump from './bump.png';
import {Video, WebCamSource} from './exampleWebcam';

const shaders = Shaders.create({
  Bump: {
    // language=GLSL
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform sampler2D t, bump;
        void main () {
            float intensity=texture2D(bump, uv).r;
            vec4 col=texture2D(t, uv);
            gl_FragColor = vec4(col.r*intensity,col.g*intensity,col.b*intensity, 1.0);
        }`,
  },
});

export class ExampleBump extends Component {
  render() {
    return (
      <Surface width={400} height={300} style={{marginTop:-100}}>
        <LinearCopy>
          <Node
            shader={shaders.Bump}
            backbuffering
            uniforms={{
              t: (redraw: any) => (
                <Video onFrame={redraw} autoPlay>
                  <WebCamSource />
                </Video>
              ),
              bump,
            }}
          />
        </LinearCopy>
      </Surface>
    );
  }
  static defaultProps = {
    persistence: 0.8,
  };
}
