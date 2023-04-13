import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchAskDetail(id){
    return axios.get(`${config.baseUrl}item/${id}.json`)
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchNewsList(){
    // return axios.get(config.baseUrl + "news/1.json");
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

// 위에 3개를 하나로 합치는 작업 중.,
async function fetchList(id) {
    try {
        const response = await axios.get(`${config.baseUrl}${id}/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchAskDetail,
    fetchList
}