/*react*/
import React from 'react';
import { FlatList, Linking } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


/* react native paper */
import { Card, Button, IconButton } from 'react-native-paper';

/*styles*/
import { StyledCard } from './cards-to-post.styles';
import { Link } from '@react-navigation/native';


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
    
    const image = props.item.image?  props.item.image.thumbnail.contentUrl : 'https://s1.static.brasilescola.uol.com.br/be/vestibular/-59bbd4105e92d.jpg';

    const saveData = async () => {
        try {
            if (props.item) {
                await AsyncStorage.removeItem(JSON.stringify(props.item.name)); //remove current data so it doesn't have duplication
                await AsyncStorage.setItem(JSON.stringify(props.item.name), JSON.stringify(props.item));
            } else {
                            await AsyncStorage.setItem(JSON.stringify(props.item.name), JSON.stringify(props.item));

            }
        } catch (error) {
            console.log(error);
        }
        alert("Save!");
    }
       
    return(
        <>
        <StyledCard>
        <Card key={props.item ? props.item.url : null} style={theme.card}> 
            <Card.Cover source={{uri : image}} />
            <Card.Actions>
                <Button style={theme.button} theme={theme} onPress={() => Linking.openURL(props.item.url)} style={{width:'88%'}} >{props.item.name}</Button>
                <IconButton  icon="heart-outline" onPress={() => {saveData()}}/>             
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

        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.url} disableVirtualization={false}/> 

    );
}

export default CardsToPosts;
