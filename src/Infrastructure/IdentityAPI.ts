import axios from 'axios'
export default axios.create({
    baseURL: 'http://vti.tadbirkish.com/api/v1/Account/',
    headers: {
        'Content-Type': 'application/json',
        // 'x-api-key': '676bdb1ce2d84276b8874a41f143c739',
        // 'api-version':'1'
    },
})
