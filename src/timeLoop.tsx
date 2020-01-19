import React, {FC, PureComponent} from 'react';

// NB this is only an utility for the examples
export const timeLoop = (C: any, props: {refreshRate?: number}) => {
  class TL extends PureComponent<{}> {
    state = {
      time: 0,
      tick: 0,
    };
    cancel = false;
    componentDidMount() {
      // tslint:disable-next-line:one-variable-per-declaration
      let startTime: number, lastTime: number;
      const interval = 1000 / (props.refreshRate || 60);
      lastTime = -interval;
      const loop = (t: number) => {
        if (this.cancel) {
          return;
        }
        requestAnimationFrame(loop);
        if (!startTime) {
          startTime = t;
        }
        if (t - lastTime > interval) {
          lastTime = t;
          this.setState({
            time: t - startTime,
            tick: this.state.tick + 1,
          });
        }
      };
      requestAnimationFrame(loop);
    }
    componentWillUnmount() {
      this.cancel = true;
    }
    render() {
      return <C {...this.props} {...this.state} />;
    }
  }

  return TL;
};
