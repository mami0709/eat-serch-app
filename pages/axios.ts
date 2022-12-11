import axios from "axios";

//インスタンス
const instance = axios.create({
baseURL: "http://webservice.recruit.co.jp/hotpepper/gourmet/v1",
withCredentials: false,
headers: {
	  "Content-Type": "application/x-www-form-urlencoded",
	  "Access-Control-Allow-Origin": "*",
	},
});

export default instance;