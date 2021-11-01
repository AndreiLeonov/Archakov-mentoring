import React from 'react';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = ({ data, index, onDelete }) => {

    const deleteOnClick = () => {
        onDelete(index);
    }

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon onClick={deleteOnClick}/>
                </IconButton>
            }
        >
            <ListItemAvatar>
                <Avatar>
                    <PersonIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={data.fullName}
                secondary={
                    <>
                        <Typography
                            style={{ fontSize: '16px' }}
                            color="text.primary"
                        >
                            {data.text}
                        </Typography>
                        <Typography
                            style={{ fontSize: '12px', color: 'grey' }}
                            color="text.primary"
                        >
                            {data.createdAt}
                        </Typography>
                    </>
                } />
        </ListItem>
    );
};

export default Item;