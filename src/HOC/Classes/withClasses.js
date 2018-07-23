import React, {Component} from 'react';

import Aux from '../Auxi';
import WrappDivisions from '../WrappDivisions';

const withClasses = (WrappComponent, mainClass) => {
    return class extends Component {
        render(){
            return (
                <Aux>
                    <WrappDivisions mainClass={mainClass}>
                        <WrappComponent {...this.props}/>
                    </WrappDivisions>
                </Aux>        
            )
        }
    }
    /*return (props) => (
        <Aux>
            <WrappDivisions mainClass={mainClass}>
                <WrappComponent {...props}/>
            </WrappDivisions>
        </Aux>
    )*/
}

export default withClasses;