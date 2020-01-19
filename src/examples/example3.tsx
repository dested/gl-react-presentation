import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {Component, useState} from 'react';
import {timeLoop} from '../timeLoop';

const shaders = Shaders.create({
  helloBlue: {
    // uniforms are variables from JS. We pipe blue uniform into blue output color
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float blue;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}
`,
  },
});

// We can make a <HelloBlue blue={0.5} /> that will render the concrete <Node/>
export class HelloBlue extends Component<{blue: number}> {
  render() {
    const {blue} = this.props;
    return <Node shader={shaders.helloBlue} uniforms={{blue}} />;
  }
}

// Our example will pass the slider value to HelloBlue
export const Example3 = timeLoop(
  class extends Component<{time: number}> {
    render() {
      const {time} = this.props;
      return (
        <Surface width={300} height={300}>
          <HelloBlue blue={0.5 + 0.5 * Math.cos(time / 500)} />
        </Surface>
      );
    }
  },
  {refreshRate: 60}
);
