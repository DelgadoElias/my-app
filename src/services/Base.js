export class BaseService {

    // Promise
    static async getQuery(){
        return process.env.REACT_APP_API_URL
    }
}

export default BaseService;