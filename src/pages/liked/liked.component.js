/*react*/
import React from 'react';

/*async-storage*/
import AsyncStorage from '@react-native-async-storage/async-storage';


/* react native paper */
import { Card, Paragraph, IconButton } from 'react-native-paper';

const theme = {
    card: {
        height: '100%',
    },
    img: {
        width: '100%',
        height: '50%',
    },
    text: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    dataText: {
        marginTop: '5%',
        alignSelf: 'center',
        textAlign: 'center',
    }
}


const Liked = () => {

    useEffect(() => {
        
        const getAllKeysFromAsync = async () => {
        try {
            return await AsyncStorage.getAllKeys();
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
        }, [input])

    


    return (
        <>
            <Card style={theme.card}>
                <Card.Content>
                    
                    <Card.Title title={"Alou"}/>
                    
                   
                </Card.Content>
            </Card>
        </>
    );
}

export default Liked;