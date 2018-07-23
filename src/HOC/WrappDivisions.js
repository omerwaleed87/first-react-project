import React from 'react';

const WrappDivisions = (props) => {
    return <div className={props.mainClass}>
                {props.children}
           </div>;
}

export default WrappDivisions;