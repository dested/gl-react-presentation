import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import React, {Component, FC, useEffect, useState} from 'react';

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

export const Example3: FC<{fancy: boolean}> = ({fancy}) => {
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

function useTimeLoop(refreshRate: number = 60): number {
  const [cancel, setCancel] = useState(false);
  const [time, setTime] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let startTime: number = 0;
    let lastTime: number = 0;
    const interval = 1000 / refreshRate;
    lastTime = -interval;
    const loop = (t: number) => {
      if (cancel) {
        return;
      }
      requestAnimationFrame(loop);
      if (!startTime) {
        startTime = t;
      }
      if (t - lastTime > interval) {
        lastTime = t;
        setTime(t - startTime);
        setTick(tick + 1);
      }
    };
    requestAnimationFrame(loop);

    return () => {
      setCancel(true);
    };
  }, [refreshRate]);

  return time;
}
