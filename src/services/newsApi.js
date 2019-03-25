import {makeRequest} from './makeRequest';

const BASE_URL = 'https://newsapi.org/v2/';
const HEADER = {
    'X-Api-Key': '0187f9eeaea04ecdae208a03214c967f', 
}


/* function for showing news 
 * param top  - if true - show top news; if false - show newest news
 * param category for choose news category
 * country - to show which country news. Now it`s default and ua only 
*/

export async function getNews(category = ''){
    try{
        let addCategory= category ?  `&category=${category}` : '';

        const url = `${BASE_URL}top-headlines?country=ua${addCategory}&pageSize=10`

        let mainNews = await makeRequest(url, {
            headers: {
                ...HEADER
            }
        });

        console.log('getMainNews - ',mainNews);
        return mainNews.articles;
    } catch(e){
        console.log(e);
    }
}

export async function searchNews(phrase, count=20){
    try{
        let q = `q=${phrase}`;
        let pageSize = `&pageSize=${count}`;

        let url = `${BASE_URL}everything?${q}${pageSize}`

        let data = await makeRequest(url, {
                headers: {
                    ...HEADER
                }
            });
       
        return data.articles;
    } catch(e){
        console.log(e);
    }
}

