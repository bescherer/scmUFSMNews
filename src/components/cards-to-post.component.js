/*react*/
import React from 'react';
import { FlatList } from 'react-native';

/* react native paper */
import { Card, Button } from 'react-native-paper';

/*styles*/
import { StyledCard } from './cards-to-post.styles';
import UFSM from '../assets/ufsm.jpg'


const theme = {
    button: {
        width: '100%',
    },
    card: {
        marginBottom: '2%'
    },
    colors: {
        primary: '#004AAD',
    }
}

const Item = (props) => { //show the content from post
   
    return(
        <>
        <StyledCard>
        <Card key={props.item ? props.item.url : null} style={theme.card}> 
            <Card.Cover source={{uri: props.item.image?  props.item.image.thumbnail.contentUrl : UFSM }} />
            <Card.Actions>
                <Button style={theme.button} theme={theme} >{props.item.name}</Button>
            </Card.Actions>
        </Card>
        </StyledCard>  
        </>

   );
};
  

const CardsToPosts = (props) => {

    const DATA = props.posts;

    const renderItem = ({item}) => {
        return (
            <>
                {item.name? 
                    <Item
                    item={item ? item : null}/>
                : null}
            </>
        );
    };

    return (    
        <>  
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.ampUrl} onEndReachedThreshold={0.01} onEndReached={props.loadMorePosts} /> 
        </>
    );
}

export default CardsToPosts;
