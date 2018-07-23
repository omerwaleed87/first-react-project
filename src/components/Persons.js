import React, {Component} from 'react';

import Person from './Person/Person';
import withClass from '../HOC/Classes/withClasses';

class Persons extends Component {

    constructor (props){
        super(props);
        console.log("Persons.js constructor", props);
    }

    // componentWillMount(){
    //     console.log("Persons.js componentWillMount()");
    // }

    // componentWillReceiveProps(nextProps){
    //     console.log("Persons.js componentWillReceiveProps()", nextProps);
    // }

    // componentDidMount(){
    //     console.log("Persons.js componentDidMount()");
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Persons.js shouldComponentupdate");
        return nextProps.currentState !== this.props.currentState || nextProps.humanList !== this.props.humanList;
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('Persons.js getDerivedStateFromProps()');
        // console.log(nextProps, prevState);

        return true;
    }

    getSnapshotBeforeUpdate(a){
        console.log("Persons.js getSnapshotBeforeUpdate()", a);
        return true;
    }

    // componentWillUpdate(){
    //     console.log("Persons Component componentWillUpdate()");
    // }

    componentDidUpdate(){
        console.log("Persons Component componentDidUpdate()");
    }

    render() {
        console.log("Persons.js render()");
        return this.props.humanList
                .filter((personFiltered, fkey) => (fkey >= this.props.stateChunks * this.props.currentState 
                                            && fkey < this.props.stateChunks + (this.props.currentState*this.props.stateChunks) ))
                .map((persons, key) => {
                    return <Person 
                        name={persons.name} 
                        age={persons.age}
                        color={persons.color}
                        click={this.props.humanAgeClick.bind(this, key + (this.props.currentState * this.props.stateChunks))}
                        nameChanged={this.props.humanNameChange.bind(this, key + (this.props.currentState * this.props.stateChunks))}
                        key={persons.id}/>
        });
    }
}

export default withClass(Persons, "Human");