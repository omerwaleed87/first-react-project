import React, {Component} from 'react';
import { connect } from 'react-redux';

import PropertyDescriptionComponentStyle from './PropertyDescriptionComponent.css';

class PropertyDescriptionComponent extends Component{

    render(){
        if(typeof this.props.propertyDetail.listing !== "undefined"){
            return(
                <div className={PropertyDescriptionComponentStyle.propertyDescription}>
                    <div className={PropertyDescriptionComponentStyle.heading}>
                        Property Overview
                    </div>
                    <div className={PropertyDescriptionComponentStyle.description}>
                        {this.props.propertyDetail.listing[0].description}
                    </div>
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = state => {
    if(typeof state !== "undefined"){
        return {
            propertyDetail : state.propertyDetail
        };
    }
    return {
        propertyDetail : {},
    };
}

export default connect(mapStateToProps, null)(PropertyDescriptionComponent);