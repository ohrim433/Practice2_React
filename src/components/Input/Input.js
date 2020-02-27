import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        console.log(props);
        this.state = {
            value: 0
        };
    }

    inptHandler = (e) => {
        this.setState({value: +e.target.value});
        // console.log(e.target.value);
    };

    upHandler=()=>{
        this.props.inptHandler(this.state.value)
    };

    render() {
        return (
            <div>
                <input type="number" placeholder="Enter a number" onChange={this.inptHandler} />
                <button onClick={this.upHandler}>add input</button>
            </div>
        );
    }
}

export default Input;