import axios from 'axios';

console.log("Nicolas FODA PRA CARALHO!");

axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts/1'
}).then(function (response) {
    console.log(response);
});
