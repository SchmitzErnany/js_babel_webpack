console.log("Ernany");

axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts/1'
}).then(function (response) {
    console.log(response);
});