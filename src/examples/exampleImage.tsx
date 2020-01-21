import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {Component, FC, useEffect, useState} from 'react';
import {useTimeLoop} from '../hooks/useTimeLoop';
import image from './image.png';

const shaders = Shaders.create({
  simpleTexture: {
    frag: GLSL`
precision highp float;
uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  vec4 c = texture2D(texture, vec2(uv.x, uv.y));
  gl_FragColor = c;
}`,
  },
  funnyTexture: {
    frag: GLSL`
precision highp float;
uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  gl_FragColor = texture2D(texture, vec2(mod(uv.x*5.0,1.0), uv.y));
}`,
  },
  invertYTexture: {
    frag: GLSL`
precision highp float;
uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  gl_FragColor = texture2D(texture, vec2(uv.x, 1.0-uv.y));
}`,
  },
  colorsTexture: {
    frag: GLSL`
precision highp float;
uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  vec4 sample = texture2D(texture, uv);
  gl_FragColor = vec4(sample.x, sample.y, sample.z, sample.w);
}`,
  },
  funnyColors1Texture: {
    frag: GLSL`
precision highp float;
uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  vec4 sample = texture2D(texture, uv);
  gl_FragColor = vec4(sample.x, sample.x, sample.x, sample.w);
}`,
  },
  funnyColors2Texture: {
    frag: GLSL`
precision highp float;
uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  vec4 sample = texture2D(texture, uv);
  gl_FragColor = vec4( (sample.x+uv.x) * sample.w, (sample.y+uv.y) * sample.w, sample.z, sample.w);
}`,
  },
});

export const ExampleImage: FC<{fancy: number}> = ({fancy}) => {
  let shader: any;
  switch (fancy) {
    case 0:
      shader = shaders.simpleTexture;
      break;
    case 1:
      shader = shaders.funnyTexture;
      break;
    case 2:
      shader = shaders.invertYTexture;
      break;
    case 3:
      shader = shaders.colorsTexture;
      break;
    case 4:
      shader = shaders.funnyColors1Texture;
      break;
    case 5:
      shader = shaders.funnyColors2Texture;
      break;
  }
  return (
    <Surface width={300} height={300}>
      <Node shader={shader} uniforms={{texture: image}} />
    </Surface>
  );
};
