const jayson = require("jayson");

const client = jayson.client.http({
    port: 4040,
    hostname: 'localhost'
})

function add(a, b, callback){
    client.request('add',[a, b], (err, res) => {
        if(err) throw err;
        console.log(res.result);
        callback(res.result);
    });
}

module.exports = {
    add: add
}