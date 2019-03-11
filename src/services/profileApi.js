import {makeRequest} from './makeRequest';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users/1';

export async function getUser(){
    try{
        let user = await makeRequest(BASE_URL);
        return user;
    } catch(e){
        console.log(e);
    }
}
