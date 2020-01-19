import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {Component, useState} from 'react';

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

// Our example will pass the slider value to HelloBlue
export function Example2() {
  const [blue, setBlue] = useState(0.2);
  return (
    <>
      <Surface width={300} height={300}>
        <Node shader={shaders.helloBlue} uniforms={{blue}} />
      </Surface>
      <input type="range" value={blue} min={0} max={1} onChange={e => setBlue(e.target.valueAsNumber)} step={0.01} />
    </>
  );
}
