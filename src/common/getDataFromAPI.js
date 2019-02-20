import jsonplaceholder from '../services/jsonplaceholder'

const fetchResourceFromURI = async (term) =>{
    let response =  await jsonplaceholder.get(term)
    return response.data
}

export default fetchResourceFromURI