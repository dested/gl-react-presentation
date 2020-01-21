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
  funnyTexture2: {
    frag: GLSL`
precision highp float;
uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  gl_FragColor = texture2D(texture, vec2(mod(uv.x*5.0,1.0), 1.0-uv.y));
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
  gl_FragColor = vec4(sample.r, sample.g, sample.b, sample.a);
}`,
  },
  funnyColors2Texture: {
    frag: GLSL`
precision highp float;
uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  vec4 sample = texture2D(texture, uv);
  gl_FragColor = vec4( (sample.r+uv.x) * sample.a, (sample.g+uv.y) * sample.a, sample.b, sample.a);
}`,
  },
  funnyColors3Texture: {
    frag: GLSL`
precision highp float;
uniform sampler2D texture;
varying vec2 uv;
            
void main() {
  vec4 sample = texture2D(texture, vec2(uv.x, 1.0 - uv.y));
  gl_FragColor = vec4( (sample.r+uv.x) * sample.a, (sample.g+uv.y) * sample.a, sample.b, sample.a);
}`,
  },
});

export const ExampleImage: FC<{demo: number}> = ({demo}) => {
  let shader: any;
  switch (demo) {
    case 0:
      shader = shaders.simpleTexture;
      break;
    case 1:
      shader = shaders.funnyTexture;
      break;
    case 10:
      shader = shaders.funnyTexture2;
      break;
    case 2:
      shader = shaders.invertYTexture;
      break;
    case 3:
      shader = shaders.colorsTexture;
      break;
    case 5:
      shader = shaders.funnyColors2Texture;
      break;
    case 6:
      shader = shaders.funnyColors3Texture;
      break;
  }
  return (
    <Surface width={300} height={300}>
      <Node shader={shader} uniforms={{texture: image}} />
    </Surface>
  );
};
