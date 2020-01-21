import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {Component, useState} from 'react';

const shaders = Shaders.create({
  green: {
    // language=GLSL
    frag: GLSL`
precision highp float;
uniform float green;
void main() {
  gl_FragColor = vec4(0.0, green, 0.0, 1.0);
}
`,
  },
});

export function ExampleSlider() {
  const [green, setGreen] = useState(0.8);
  return (
    <div className={'col'}>
      <Surface width={300} height={300}>
        <Node shader={shaders.green} uniforms={{green}} />
      </Surface>
      <input type="range" value={green} min={0} max={1} onChange={e => setGreen(e.target.valueAsNumber)} step={0.01} />
    </div>
  );
}
