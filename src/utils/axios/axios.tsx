import axios from "axios";
import NetWorkUrl from "../url/url";

/**
 * Axios NetWork Request
 * @param type 1:post 2:get
 * @param url string
 * @param param object
 */
function Axios(type: number, url: string, param: object) {
    // url = NetWorkUrl.url + url
    if (type === 1) {
        return axios.post(url, param, {headers: {"Authorization": "jlksjaoidjwandnlkwj"}})
            .then(function (response) {
                // console.log(response)
                return response
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error)
                // return error
            });
    } else {

    }
    console.log(55566)
    return null
}

export default Axios
