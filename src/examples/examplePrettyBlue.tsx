import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {Component, FC, useEffect, useState} from 'react';
import {useTimeLoop} from '../hooks/useTimeLoop';

const shaders = Shaders.create({
  simpleBlue: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float blue;
void main() {
  gl_FragColor = vec4(0.0, 0.0, blue, 1.0);
}
`,
  },
  fancyBlue: {
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

export const ExamplePrettyBlue: FC<{fancy: boolean}> = ({fancy}) => {
  const time = useTimeLoop(60);
  return (
    <Surface width={300} height={300}>
      <Node
        shader={fancy ? shaders.fancyBlue : shaders.simpleBlue}
        uniforms={{blue: 0.5 + 0.5 * Math.cos(time / 500)}}
      />
    </Surface>
  );
};

