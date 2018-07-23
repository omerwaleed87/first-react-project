import React , {Component} from "react";

const AsyncComponent = (importComponent) => {
    return class extends Component {
        
        state = {
            component : null
        }

        componentDidMount(){
            // console.log("Async Component did mount()");
            importComponent().then(cmp => {
                // console.log("Async Component set state default");
                this.setState({component : cmp.default});
            });
        }
        
        render(){
            console.log("Async Component render()");
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default AsyncComponent;