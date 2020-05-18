const client = require('./rpc_client');

//invoke 'add'
client.add(2, 3, result => {
    //console.assert(result == 6);
    console.log(result);
});