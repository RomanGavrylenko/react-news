export function makeRequest(url, options={}){
    return fetch(url, options).then(res=>{
        if(!res.ok){
            console.log(res.url)
            throw new Error (res.status,res.statusText);
        }
        return res.json();
    })
}