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




    render(){

        const{inboxData} = this.state;
        return (
            <div>
            <LeftNavBar/>
            <div>
                <TopNavBar/>
                <InboxList  inboxData = {inboxData} />
            </div>
            
            </div>

        )
    }
}