import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component{
    render(){
        return <h1>hello {this.props.name}</h1>
    }
}

export default Demo;