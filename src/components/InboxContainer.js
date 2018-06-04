import React, {Component} from 'react';
import {LeftNavBar} from './LeftNavBar';
import {InboxList} from './InboxList';
import {TopNavBar} from './TopNavBar';
import '../styles/All_Style.css';
import {getCommentData,getUserData} from '../MockAPI/FetchAPI';





export class InboxContainer extends Component{
     constructor(props){
        super(props);
        this.state = {
            inboxData: [],
            userData:{},
            ifLeftOpen:false,
        }
    } 

componentDidMount(){
    this.fetchInboxData();
    this.fetchUserData();
}

fetchInboxData(){
    getCommentData()
    .then(d =>{
        if(d.length>0){
            this.setState(
               {inboxData:d}
            ); 
            /* console.log(d); */
        }
    })
    .catch(error => console.log(error))
}

fetchUserData(){
    getUserData()
    .then( d =>{
        if (d.length>0){
            this.setState(
                {userData:d[0]}
            );
        }
    }
    )
    .catch(error => console.log(error))
}

clickButton(){
    const{isLeftOpen} = this.state;
    this.setState({
        isLeftOpen: !isLeftOpen,
    })
}

    render(){

        const{inboxData,userData,isLeftOpen} = this.state;
        return (
            <div>
            <LeftNavBar userData = {userData} ifLeftOpen = {isLeftOpen}/>
            <div className = {isLeftOpen ? "frame-right" : "frame-orgin"}>
                <TopNavBar  isLeftOpen clickButtonCallBack={()=>this.clickButton()}/>
                <InboxList  inboxData = {inboxData} isLeftOpen = {isLeftOpen}/>
            </div>
            
            </div>

        )
    }
}