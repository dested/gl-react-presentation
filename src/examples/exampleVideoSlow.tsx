import {GLSL, Node, Shaders} from 'gl-react';
import {Surface} from 'gl-react-dom';
import raf from 'raf';
import React, {Component, VideoHTMLAttributes} from 'react';
import videoMP4 from './video.mp4';

// Our example will simply split R G B channels of the video.
const shaders = Shaders.create({
  SplitColor: {
    // language=GLSL
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D texture;
void main () {
  gl_FragColor = texture2D(texture, uv);
}
`,
  },
});

// We now uses <Video> in our GL graph.
// The texture we give to <SplitColor> is a (redraw)=><Video> function.
// redraw is passed to Video onFrame event and Node gets redraw each video frame.
export const ExampleVideoSlow = () => (
  <>
    <Surface width={426} height={240} pixelRatio={1}>
      <Node
        shader={shaders.SplitColor}
        uniforms={{
          texture: (redraw: any) => (
            <video onTimeUpdate={redraw} autoPlay loop>
              <source type="video/mp4" src={videoMP4} />
            </video>
          ),
        }}
      />
    </Surface>
  </>
);
