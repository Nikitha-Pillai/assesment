import { Avatar, Button, Divider, List, ListItem, ListItemAvatar,ListItemText, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Home = () => {
     const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
          .then((res) => {
            const fetchedData = res.data.map(item => ({
              Name: item.title,
              Price: `${item.price} $`,
              Category: item.category,
              Image: item.image
            }));
            setData(fetchedData);
          })
          .catch((error) => {
            console.error("There was an error fetching the products!", error);
          });
    }, []);
    return (
        
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      
            <h1>Welcome to Product App</h1>
            <br/>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',minWidth:'500px'}}>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>Available products:</Typography>
                
                {data.map((row, index) => (
                    <ListItem alignItems="flex-start" key={index}sx={{ border: '1px solid grey', borderRadius: '8px', marginBottom: '8px',padding:'40px',borderColor:"DodgerBlue" }}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'blue',width: 100, height: 100, marginRight: 4,borderRadius: '8px' }} alt={row.Name} src={row.Image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={row.Name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {row.Price}
                                    </Typography>
                                    <br />
                                
                                    {'('+ row.Category +')'}
                                </React.Fragment>
                                
                            }
                            
                        />
                       <div style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
              <Button variant="contained" color="primary">Buy</Button>
            </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Home;
