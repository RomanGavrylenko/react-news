export async function makeRequest(url, options={}){

    try{
        let response = await fetch(url, options);

        if(!response.ok){
            throw new Error ('Статус ошибки', response.status);
        }

        let data = await response.json();

        return data;
    } catch (e){
        console.log(e);
    }

    /* return fetch(url, options).then(res=>{
        if(!res.ok){
            throw new Error (res.status,res.statusText);
        }
        console.log('news res',res);
        return res.json();
    })*/
}