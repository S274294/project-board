import React, { useState } from 'react';
import {useForm} from '@fuse/hooks';
import {ClickAwayListener, IconButton, InputAdornment, TextField, Typography} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

function TaskName(props){
    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm} = useForm({
        title: props.title
    });

    function handleOpenForm()
    {
        setFormOpen(true);
    }

    function isFormInvalid()
    {
        return form.title === '';
    }

    function handleCloseForm()
    {
        setFormOpen(false);
    }

    function handleCancelForm()
    {
        resetForm();
        handleCloseForm();
    }
    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( isFormInvalid() )
        {
            return;
        }
        props.onTitleChange(form.title);
        handleCloseForm();
    }


    return formOpen ? (
        <ClickAwayListener onClickAway={() => handleCancelForm()}>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={form.title}
                    name="title"
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    autoFocus
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton type="submit" disabled={isFormInvalid()}>
                                    <CheckIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ClickAwayListener>
    ) : (
        <Typography
            className="text-12 cursor-pointer"
            onClick={() => handleOpenForm()}
        >
            {form.title}
        </Typography>
    )
}





export default TaskName;