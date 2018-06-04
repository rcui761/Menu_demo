import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';



export class TopNavBar extends Component{
    static propTypes = {
        clickButtonCallBack: PropTypes.func.isRequired,
       
    }

    clickButton(){
        
        this.props.clickButtonCallBack();
       
    }
    
    render() {
        
        return(
            <div className = "top-nav">
                <a className = "icon"
                    onClick={()=>this.clickButton()}
                    >
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

