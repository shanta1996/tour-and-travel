import axios from "axios";

const api=axios.create({
    baseURL:"http://127.0.0.1:8000"
})
// HTTP GET METHOD 
export const getDestinationApi=()=>{
    return api.get("/destinationapi/getcountry/")
}