import React, { Component } from 'react';
/* import {Menu} from './Menu'; */
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';

export class LeftNavBar extends Component {
    static propTypes = {
        userData: PropTypes.object.isRequired,
        isLeftOpen: PropTypes.bool.isRequired,
    }

    render() {
        const { isLeftOpen, userData } = this.props;
        return (
            <div className={isLeftOpen ? "nav-right" : "nav-origin"}>
                <div className = "bounce">
                <div className={isLeftOpen ? "user-icon" : "user-origin"}>
                    <img src={userData["avatar"]} alt={""}/>
                </div>
                <div className={isLeftOpen ? "contact-icon" : "contact-origin"}>
                    <Ionicon
                        icon="ios-people-outline"
                        fontSize="65px"
                        color="white"
                    />
                </div>
                <div className={isLeftOpen ? "start-icon":"start-origin"}>
                    <Ionicon
                        icon="md-star-outline"
                        fontSize="65px"
                        color="white"
                    />
                </div>

                <div className={isLeftOpen ? "message-icon" : "message-origin"}>
                    <Ionicon
                        icon="ios-chatbubbles-outline"
                        fontSize="65px"
                        color="white"
                    />
                </div>
                <div className={isLeftOpen ? "setting-icon" : "setting-origin"}>
                    <Ionicon
                        icon="ios-settings-outline"
                        fontSize="66px"
                        color="white"
                    />
                </div> 
                    
                </div>

            </div>
        )
    }

}

