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

    useEffect(() => {
        
        const getAllKeysFromAsync = async () => {
            try {
                return  await AsyncStorage.getAllKeys();
                
            } catch(error) {
            console.log(err)
            }
        }

        const getOnePostFromAsync = async (key) => {
            try {
                return await AsyncStorage.getItem(key);

            } catch(err) {
            console.log(err)
            }
        }
        
        getAllKeysFromAsync()
            .then(resK => {
                const obj = [];
                    if(resK) {
                    resK.map((res) => {
                    getOnePostFromAsync(res)
                        .then(resP => {
                            const resToObj = JSON.parse(resP);
                            obj.push({...resToObj})                            
                        })
                        .catch(err => console.log(err));
                    })
                }   
                setPostsFromAsync(obj);
            })
            .catch(err => console.log(err));

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