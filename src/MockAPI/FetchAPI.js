 import axios from 'axios';

export{getCommentData,getUserData}

const baseURL = "http://localhost:3000";
 

function getCommentData(){
    const url = baseURL + "/DUMMY_DATA.json";
    //console.log(url);
    return axios.get(url)
    .then((response) => response.data)
    .catch ((error)=> console.log(error))

}

function getUserData(){
    const url = baseURL + "/USER_MOCK_DATA.json";
    //console.log(url);
    return axios.get(url)
    .then((response) => response.data)
    .catch ((error)=> console.log(error))

}