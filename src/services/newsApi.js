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

export async function getNews(top=true ,category = '', count=20, country='ua'){
    try{
        let addCategory= category ?  `&category=${category}` : '';
        let isTop = top ? `top-headlines` : `everything`;
        let pageSize = `&pageSize=${count}`;

        const url = `${BASE_URL}${isTop}?country=${country}${addCategory}${pageSize}`

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

