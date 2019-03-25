import {makeRequest} from './makeRequest';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=10';

export async function getUser(){
    try{
        let usersResponse = await makeRequest(BASE_URL);
        return usersResponse.users;
    } catch(e){
        console.log(e);
    }
}
