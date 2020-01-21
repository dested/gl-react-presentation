import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {Component} from 'react';

const shaders = Shaders.create({
  helloGL: {
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(0.3, 0.5, 0.1,1.0);
}
`,
  },
});

export class Example1 extends Component {
  render() {
    return (
      <Surface width={300} height={300}>
        <Node shader={shaders.helloGL} />
      </Surface>
    );
  }
}
