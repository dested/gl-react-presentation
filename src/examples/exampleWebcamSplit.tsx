import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {useEffect, useRef, useState} from 'react';
import {Video, WebCamSource} from './exampleWebcam';

const shaders = Shaders.create({
  split: {
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform float mouseX;
void main () { 
    vec4 c = texture2D(t, uv);
    if(uv.x>mouseX){
        gl_FragColor = vec4(c.r,c.g,c.b,1.0);
    }else{
        gl_FragColor = vec4(1.0-c.r,1.0-c.g,1.0-c.b,1.0);
    }
}`,
  },
});

export function ExampleWebcamSplit() {
  const surface = useRef<any>();
  const position = useMousePosition(surface);
  return (
    <Surface width={400} height={300} ref={surface} style={{marginTop: -100}}>
      <Node
        shader={shaders.split}
        uniforms={{
          t: (redraw: any) => (
            <Video onFrame={redraw} autoPlay>
              <WebCamSource />
            </Video>
          ),
          mouseX: position.x / 400,
        }}
      />
    </Surface>
  );
}

export const useMousePosition = (ref: React.RefObject<any>) => {
  const [position, setPosition] = useState({x: 0, y: 0});
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const setFromEvent = (e: any) => {
      setPosition({x: e.offsetX, y: e.offsetY});
    };
    ref.current.glView.canvas.addEventListener('mousemove', setFromEvent);
    return () => {
      ref.current.glView.canvas.removeEventListener('mousemove', setFromEvent);
    };
  }, [ref.current]);
  return position;
};
