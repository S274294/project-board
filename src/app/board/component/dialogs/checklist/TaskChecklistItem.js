import {Icon, IconButton, TextField, Checkbox, ListItem} from '@material-ui/core';
import React from 'react';
import {useForm, useUpdateEffect} from '@fuse/hooks';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function TaskCheckListItem(props) {

    const {item, onListItemChange, index} = props;
    const {form, handleChange} = useForm(item);
    
    useUpdateEffect(() => {
        onListItemChange(form, index);
    }, [form, index, onListItemChange]);

    if ( !form )
    {
        return null;
    }

    return (
        <ListItem
            className="px-0"
            key={form.id}
            dense
        >
            <Checkbox
                checked={form.checked}
                name="checked"
                onChange={handleChange}
                tabIndex={-1}
                disableRipple
            />
            <TextField
                className="flex flex-1 mx-8"
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="outlined"
            />
            <IconButton aria-label="Delete" onClick={props.onListItemRemove}>
                <DeleteOutlineIcon />
            </IconButton>
        </ListItem>
    )
}

export default TaskCheckListItem;