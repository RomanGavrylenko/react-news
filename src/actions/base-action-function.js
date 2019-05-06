export default class BaseDataFunction {

    //set data to reducer after success call
    setData = (type, data) => {
        return {
            type: type,
            payload: data
        }
    }

    //set error at reducer
    setError = (type, err) => {
        return {
            type: type,
            payload: err
        }
    }

    //reducer bigun fetch data 
    setLoading = (type) => ({ type: type })   
}