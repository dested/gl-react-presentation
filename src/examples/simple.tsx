import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {FC, useEffect, useState} from 'react';

let shaders = Shaders.create({
  simple: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0,1.0);
}
`,
  },
});


export const Simple: FC<{shader: string}> = ({shader}) => {
  const [update, forceUpdate] = useState(0);
  useEffect(() => {
    shaders = Shaders.create({
      simple: {
        frag: shader,
      },
    });
    forceUpdate(update + 1);
  }, [shader]);

  return (
    <Surface width={300} height={300} style={{margin: 10}}>
      <Node shader={shaders.simple} />
    </Surface>
  );
};
