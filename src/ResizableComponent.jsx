import React, { Component } from 'react';
import { Resizable } from 'react-resizable';

class ResizableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.initialWidth || 200,
      height: 400,
    };
  }

  onResize = (event, { size }) => {
    this.setState({ width: size.width, height: size.height });
  };

  render() {
    return (
      <Resizable
        width={this.state.width}
        height={this.state.height}
        onResize={this.onResize}
        resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      >
        <div
          style={{
            width: this.state.width + 'px',
            height: this.state.height + 'px',
            border: '1px solid #ccc',
            position: 'relative',
          }}
        >
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{this.props.content}</span>
        </div>
      </Resizable>
    );
  }
}

export default ResizableComponent;