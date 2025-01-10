import axios from "axios";

const api=axios.create({
    baseURL:"http://127.0.0.1:8000/destinationapi/"
})
//http get method
export const getDestinationApi=()=>{
    return api.get("getcountry/")
}
// http get method getting indivisual data
export const getSingleDestinationApi=(id)=>{
    return api.get(`getcountry/${id}/`)
}