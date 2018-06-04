import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';

export class Menu extends Component{

    static propTypes = {
        userData: PropTypes.object.isRequired,
        isLeftOpen:PropTypes.bool.isRequired,
    }

    render() {
        const {userData, isLeftOpen} = this.props;

        return(
            <div>
               
                
            </div>

            
        )
            

    }

} 

