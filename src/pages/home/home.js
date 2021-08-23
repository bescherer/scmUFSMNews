/* react*/
import React, { useState, useEffect } from 'react';

/*react-navigation*/
import { useIsFocused } from "@react-navigation/native";

/*api*/
import { getNews } from '../../api/api';

/* components */
import CardsToPosts from '../../components/cards-to-post.component';

/* react-native-paper*/
import { Searchbar } from 'react-native-paper';
import { Text } from 'react-native-paper';

/*styles*/
import { StyledText, StyledSearchBar } from './home.styles';

const theme = {
    colors: {
        placeholder: '#004AAD', 
        text: '#000', 
        primary: '#004AAD',
        underlineColor:'transparent', 
        background : '#fff'
    },
}

const Home = (props) => {
    const [data, setData] = useState("");
    const [allNews, setAllNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const isFocused = useIsFocused();


    useEffect(() => {
        const callNewsFromApi = async (data) => {
            const body = await getNews(data);
            return body.value;
        
        };
    
        callNewsFromApi(data).
            then(res => {
                setAllNews(res);
            })
    }, [data]);

    
    const onChangeSearch = (query) => setSearchQuery(query);

    const doSearch = () => setData(searchQuery);


    return (
        <>
            <StyledSearchBar>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    onIconPress={doSearch}
                />
            </StyledSearchBar>

            {allNews.length > 0 ? 
                <CardsToPosts posts={allNews} style={{flex:1}}/> 
                : 
                <StyledText>
                    <Text> Nada a exibir :( </Text>
                </StyledText>
            }
        </>
    );
    
}

export default Home;