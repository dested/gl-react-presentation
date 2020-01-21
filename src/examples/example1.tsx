import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {Component} from 'react';

// in gl-react you need to statically define "shaders":
const shaders = Shaders.create({
  helloGL: {
    // This is our first fragment shader in GLSL language (OpenGL Shading Language)
    // (GLSL code gets compiled and run on the GPU)
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(0.3, 0.5, 0.1,1.0);
}
`,
    // the main() function is called FOR EACH PIXELS
    // the varying uv is a vec2 where x and y respectively varying from 0.0 to 1.0.
    // we set in output the pixel color using the vec4(r,g,b,a) format.
    // see GLSL_ES_Specification_1.0.17
  },
});

export class Example1 extends Component {
  render() {
    return (
      <Surface width={300} height={300} style={{backgroundColor: 'red'}}>
        <Node shader={shaders.helloGL} />
      </Surface>
    );
    // Surface creates the canvas, an area of pixels where you can draw.
    // Node instanciates a "shader program" with the fragment shader defined above.
  }
}
