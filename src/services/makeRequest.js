export function makeRequest(url, options={}){
    return fetch(url, options).then(res=>{
        if(!res.ok){
            throw new Error (res.status,res.statusText);
        }
        return res.json();
    })
}