import api from "../services/api";
import qs from 'qs';

function submitTask(event){

    event.preventDefault();

    let form = event.target;
    let title = form.querySelector('[name = "title"]').value;
    let desc = form.querySelector('[name = "desc"]').value;

    let data = { title, desc };

    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: '/newtask',
    };

    api(options);

    form.querySelectorAll('[required]').forEach( field => field.value = '' );

}

export default submitTask;