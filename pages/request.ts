//APIエンドポイント
const API_KEY = process.env.REACT_APP_API_KEY

const request = {
fetchStore: `/?key=${API_KEY}&lat=34.67&lng=135.52&range=5&order=4`,
// fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
};

export default request;
//http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=[APIキー]&lat=34.67&lng=135.52&range=5&order=4
// http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=e37192690e181c31&lat=34.67&lng=135.52&range=5&order=4
// http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=