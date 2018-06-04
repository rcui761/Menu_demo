import React, {Component} from 'react';
import Ionicon from 'react-ionicons';



export class TopNavBar extends Component{
    render() {
        return(
            <div className = "top-nav">
                <a className = "icon">
                    <Ionicon
                            icon="md-menu"
                            fontSize="35px"
                            color="white"
                    />
                    
                </a>
                <h2>Inbox</h2>
            </div>
        )
            

        

    }

}

