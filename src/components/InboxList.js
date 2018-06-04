import React, { Component } from 'react';
import PropTypes from "prop-types";
import Ionicon from 'react-ionicons';
import moment from "moment";


export class InboxList extends Component {

    static propTypes = {
        inboxData: PropTypes.array.isRequired,
    }

    render() {

        const { inboxData } = this.props;

        return (
            <div className='inbox-list-box'>
                <div >
                    <ol>{

                        inboxData.map(
                            (value, index) => {
                                //console.log(value);
                                const {
                                    first_name,
                                    last_name,
                                    comments,
                                    create_date,
                                    avatar
                                    } = value;

                                const diff = moment().diff(moment(create_date), 'days', true);
                                const days = Math.round(diff);
                                return (

                                    <li key={index}>
                                        <div className={"item-boxes"}>
                                            <div className={"left-col"}>
                                                <img  alt ='' src={avatar}/>
                                            </div>
                                            <div className={"right-col"}>
                                                <h5>{first_name + " " + last_name}</h5>
                                                <p>{comments}</p>
                                                <div className={"footer"}>
                                                    <p>
                                                        <Ionicon
                                                            icon="md-time"
                                                            fontSize="20px"
                                                            color="grey"
                                                        />
                                                        {days} ago.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                    </li>
                                )
                            }

                        )
                    }

                    </ol>
                </div>

            </div>
        )



    }

}

