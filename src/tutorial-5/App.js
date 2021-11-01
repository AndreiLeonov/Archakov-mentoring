import React from 'react';
import { List } from '@mui/material';
import Form from './Components/Form';
import Item from './Components/Item';

const App = () => {

    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        setComments(JSON.parse(localStorage.getItem('comments')) || []);
    }, []);

    React.useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const deleteComment = (index) => {
        const filtered = comments.filter((el, i) => i !== index);
        setComments(filtered);
    };

    const addComment = (value) => {
        setComments((prev) => [...prev, value]);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {comments?.length > 0 ? <h3>Отзывы:</h3> : <h3>Отзывы отсутствуют</h3>}
                {comments
                    ?.map((user, index) => <Item
                        index={index}
                        key={user.id}
                        data={user}
                        onDelete={deleteComment}
                    />)
                }
            </List>
            <Form
                sendData={addComment}
            />
        </div>
    );
};

export default App;