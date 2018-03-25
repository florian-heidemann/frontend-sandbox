import React from 'react';
import Scene from './Scene';
import style from '../../styles/App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {project: 'react'};
    }

    render() {
        return (
          <div>
            <h1>Project: {this.state.project}</h1>
            <input type="text" onChange={this.onChange.bind(this)} />
            <Scene />
        </div>);
    }

    onChange(e) {
      console.log(this.state.project)
        this.setState({
            project: e.target.value
        });
    }
}

export default App;
