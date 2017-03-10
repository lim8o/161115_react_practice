import React, { Component } from 'react';
import {
    Button,
    DatePicker
} from 'antd'

class App extends Component {
  render() {
    return (
        <div>
            <DatePicker />
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
        </div>
    );
  }
}

export default App;
