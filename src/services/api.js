const BASE_URL = 'https://newsapi.org/v2/';
const HEADER = {
    'X-Api-Key': '0187f9eeaea04ecdae208a03214c967f', 
}

function makeRequest(url, options={}){
    return fetch(url, options).then(res=>{
        if(res.status === 'error'){
            throw new Error ({
                code: res.code,
                msg: res.message
            });
        }

        return res.json();
    })
}

export async function getMainNews(category = '', country='ua'){
    let addCategory='';
    if(category){
        addCategory=`&category=${category}`
    }
    let mainNews = await makeRequest(`${BASE_URL}top-headlines?country=${country}${addCategory}`, {
        headers: {
            ...HEADER
        }
    });

    console.log('getMainNews - ',mainNews);
    return mainNews.articles;
} 