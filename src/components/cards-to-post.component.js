/*react*/
import React, {useState} from 'react';
import { FlatList, Linking } from 'react-native';

/*async-storage*/
import AsyncStorage from '@react-native-async-storage/async-storage';

/* react native paper */
import { Card, Button, IconButton } from 'react-native-paper';

/*styles*/
import { StyledCard } from './cards-to-post.styles';


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
    const [likedNews, setLikedNews] = useState(false);

    const saveData = async () => {
        try {
            if (props.item.url+'async') {
                await AsyncStorage.removeItem(JSON.stringify(props.item.url+'async')); //remove current data so it doesn't have duplication
                await AsyncStorage.setItem(JSON.stringify(props.item.url+'async'), JSON.stringify(props.item));
                setLikedNews(true);
            } else {
                await AsyncStorage.setItem(JSON.stringify(props.item.url+'async'), JSON.stringify(props.item));
                setLikedNews(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const removeData = async () => { //remove the actual post in view
        try {
            await AsyncStorage.removeItem(JSON.stringify(props.item.url+'async')); 
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <StyledCard>
        <Card style={theme.card}> 
            <Card.Cover source={{uri : image}} />
            <Card.Actions>
                <Button style={theme.button} theme={theme} onPress={() => Linking.openURL(props.item.url)} style={{width:'88%'}}>{props.item.name}</Button>
                <IconButton color={theme.colors.primary} icon={props.liked || likedNews ? "cards-heart" : "heart-outline"} onPress={() => {props.liked ? removeData() : saveData()}}/>             
            </Card.Actions>
        </Card>
        </StyledCard>  
        </>

   );
};


const CardsToPosts = (props) => {

    const DATA = props.posts;
    const liked = props.liked;


    const renderItem = ({item}) => {

        return (
            <Item item={item} liked={liked}/>
        );

    };
    return (    

    <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) =>  item.url}/> 

    );
}

export default CardsToPosts;
