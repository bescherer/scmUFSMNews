/*react*/
import React from 'react';

/*async-storage*/

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