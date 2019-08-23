import React from 'react';
import {useForm} from '@fuse/hooks';
import { TextField, Button, Avatar } from '@material-ui/core';
import CommentModel from '../../../model/CommentModel';
import _ from '@lodash';


function TaskAddComment(props) {
    const {form, handleChange, resetForm} = useForm(
        {
            member: { username: "harry", avatar: "https://material-ui.com/static/images/avatar/1.jpg" },
            message : ''
        }
    );

    function isFormInvalid()
    {
        return form.message === '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( isFormInvalid() )
        {
            return;
        }
        props.onCommentAdd(new CommentModel(form));
        resetForm();
    }
    
    return (
       <form onSubmit={handleSubmit} className="flex">
            <Avatar className="w-32 h-32" alt={form.member.username} src={form.member.avatar}/>
            <div className="flex flex-col items-start flex-1 pr-0 pl-16">
                <TextField
                    className="flex flex-1"
                    fullWidth
                    name="message"
                    row={3}
                    value={form.message}
                    onChange={handleChange}
                    variant="outlined"
                    label="Add comment"
                    placeholder="Write a comment..."
                />
                <Button
                    className="mt-16"
                    aria-label="save"
                    variant="contained"
                    color="secondary"
                    type="submit"
                    size="small"
                    disabled={isFormInvalid()}
                >
                    Save
                </Button>
            </div>
        </form>
    )
}


export default TaskAddComment;