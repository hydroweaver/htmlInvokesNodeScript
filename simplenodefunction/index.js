const http = require('http');

// http.get(url, (res)=>{
//     res.on('data', (data)=>{
//         console.log(`Hello ${data}!`);
//     })
// });

let chunk = [];
let pings = 0;

// http.createServer((req, res)=>{
//     req.on('error', (err)=>{
//         console.log('Error Encountered');
//     }).on('data', (data)=>{
//         chunk.append(data.toString());
//     }).on('end', ()=>{
//         res.write("Hello!");
//         res.end();
//     });

// }).listen(8080);

let r = {
    "name" : "karan"
};

// http.createServer((req, res)=>{
//         console.log(req.rawHeaders);
//         console.log(`This is request# ${++pings}`);
//         res.write(JSON.stringify(r));
//         res.end("Thanks for visiting");
// }).listen(8080);

// https://7ccb6f81-5393-4a8c-9793-443479f0e349.mock.pstmn.io/testpath

http.get('http://7ccb6f81-5393-4a8c-9793-443479f0e349.mock.pstmn.io/testpath', ()=>{
    console.log('OKOK');
});