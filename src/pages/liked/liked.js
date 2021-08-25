/*react*/
import React, {useEffect, useState} from 'react';
import { Text } from 'react-native-paper';

/*async-storage*/
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";

/*components*/
import CardsToPosts from '../../components/cards-to-post.component';

/*styles*/
import { StyledText } from './liked.styles';

const Liked = ({navigation}) => {
    const [postsFromAsync, setPostsFromAsync] = useState([]);
    const [liked, setLiked] = useState(true)
    const isFocused = useIsFocused();
    const [change, setChange] = useState(true)

    useEffect(() => {
        
        const getAllKeysFromAsync = () => {
            try {
                return AsyncStorage.getAllKeys();
                
            } catch(error) {
            console.log(err)
            }
        }

        const getOnePostFromAsync = (key) => {
            try {
                return AsyncStorage.getItem(key);

            } catch(err) {
            console.log(err)
            }
        }
        
        getAllKeysFromAsync()
            .then(resK => {
                const obj = [{...postsFromAsync}];
                    if(resK) {
                        console.log(resK)
                        resK.map((res) => {
                        getOnePostFromAsync(res)
                            .then(resP => {
                                console.log(resP)
                                const resToObj = JSON.parse(resP);
                                resP.includes("http") ? obj.push({...resToObj})  : null;
                            })
                            .catch(err => console.log(err));
                        })
                    }   
                setPostsFromAsync(obj);
            })
            .catch(err => console.log(err));
            console.log(change)

    }, [isFocused])

    console.log(postsFromAsync)

    useEffect(() => {
        isFocused === false ? setChange(!change) : null;
        console.log(isFocused)
    }, [isFocused])

    return (
        <>
            {postsFromAsync.length > 0 ? 
                <CardsToPosts posts={postsFromAsync} liked={liked} style={{flex:1}}/> 
                : 
                <StyledText>
                    <Text> Nada a exibir :( </Text>
                </StyledText>
            }
        </>
    );
}

export default Liked;