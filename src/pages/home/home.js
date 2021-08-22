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
    const [news, setNews] = useState([]);
    const [allNews, setAllNews] = useState([]);
    const [page, setPage] = useState(0);
    const [newsPerPage, setNewsPerPage] = useState(3);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([0])

    const isFocused = useIsFocused();


    useEffect(() => {
        const callNewsFromApi = async (data) => {
            const body = await getNews(data);
            return body.value;
        
        };
    
        callNewsFromApi(data).
            then(res => {
                //console.log(res.length)
                //res.length > 5 ? setNews(res.slice(0, newsPerPage)) : setNews(res);
                //console.log(res)
                setAllNews(res);
            })

           //console.log(data, "aqqu")
    }, [data]);



    //console.log(allNews)

    const loadMorePosts = () => { 
        const nextPage = page + newsPerPage;
        const nextPosts = allNews.slice(nextPage, nextPage + newsPerPage);
        news.push(...nextPosts);
    
        setNews(news);
        setPage(nextPage);
      
    };

    //console.log(news)

    const onChangeSearch = (query) => {
       // console.log(query)
        setSearchQuery(query);

    }
    //console.log(searchQuery)

    const doSearch = () => {
       console.log(searchQuery)
        setData(searchQuery);
        
    }

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