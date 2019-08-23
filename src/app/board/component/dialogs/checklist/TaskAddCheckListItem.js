import React from 'react';
import {Icon, ListItem, TextField, Fab} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import AddIcon from '@material-ui/icons/Add';
import TaskChecklistItemModel from '../../../model/TaskCheckListItemModel'



function TaskAddCheckListItem(props) 
{

    const {form, handleChange, resetForm} = useForm(
        {
            name: ""
        }
    );

    function isFormInValid()
    {
        return form.name === '';
    }

    function handleSumbit(ev) {
        ev.preventDefault();
        if ( isFormInValid() )
        {
            return;
        }
        props.onListItemAdd(new TaskChecklistItemModel(form));
        resetForm();
    }
    return (
        <form onSubmit={handleSumbit}>
            <ListItem
                className="pr-0"
                style={{paddingLeft: 50}}
                dense
            >
                <TextField
                    className="flex flex-1"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Add an item"
                />
                <Fab
                    className="ml-16"
                    aria-label="Add"
                    size="small"
                    color="secondary"
                    type="submit"
                    disabled={isFormInValid()}
                >
                    <AddIcon />
                </Fab>
            </ListItem>
        </form>
    )
}

export default TaskAddCheckListItem;