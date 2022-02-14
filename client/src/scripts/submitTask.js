import api from "../services/api";
import qs from 'qs';

function submitTask(event){

    event.preventDefault();

    let form = event.target;

    const data = { 'bar': 123 };
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url,
    };


}