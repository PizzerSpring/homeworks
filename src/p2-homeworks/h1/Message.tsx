import React from 'react';
import classmessage from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classmessage.message}>
            <div>
                <img className={classmessage.ava} src={props.avatar}/>
            </div>
            <div className={classmessage.textContainer}>
                <span className={classmessage.name}>{props.name}</span>
                <span className={classmessage.text}>{props.message}</span>
                <span className={classmessage.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
