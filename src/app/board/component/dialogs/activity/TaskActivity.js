import React from 'react';
import { Avatar, ListItem, Typography } from '@material-ui/core';

function TaskActivity(props) {
    return (
        <ListItem dense className="px-0">
            <Avatar alt={props.item.member.username} src={props.item.member.avatar} className="w-32 h-32" />
            <div className="flex flex-col ml-16 p-12">
                <div className="flex items-center">
                    <Typography>{props.item.member.username}</Typography>
                    <Typography className="ml-8 text-12" color="textSecondary">{props.item.time}</Typography>
                </div>
                <Typography>{props.item.message}</Typography>
            </div>
        </ListItem>
    )

}
export default TaskActivity;