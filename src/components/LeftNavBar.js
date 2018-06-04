import React, {Component} from 'react';
import {Menu} from './Menu';
import PropTypes from 'prop-types';

 export class LeftNavBar extends Component{
    static PropTypes = {
        userData: PropTypes.object.isRequired,
        isLeftOpen: PropTypes.bool.isRequired,
    }
   
    render() {
        const {isLeftOpen,userData} = this.props;
        return(
            <div className = {isLeftOpen ? "nav-right":"nav-origin"}>
                <Menu userData = {userData} isLeftOpen = {isLeftOpen}/>
            </div>
        )
    }

} 

