//const fs = require('fs');

// in node.js - file system there are many things but we need to study mainly some of them are
// writefile, appendfile, copyfile, rename, unlike

//fs.writeFile(file, data[, options], callback)


// this create file and data writen done no error -----------------
// fs.writeFile("hey.txt", "hello how are you", function(err){ // err is parameter
//     if (err) console.error(err);
//         else console.log("done");
// })


// append--------------
// fs.appendFile("hey.txt", "mai to accha hu", function(err){
// if(err) console.error(err);
// else console.log("done");
// })


//rename----------------
// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })

// copyfile--------------------------
//fs.copyFile(src, dest[, mode], callback)
// fs.copyFile("hello.txt","./copy/copy.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// } )


//unlink------------------------------
//fs.unlink(path, callback)
// fs.unlink("hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("remove");
// })

//rmdir----------------------------------
//fs.rmdir(path[, options], callback)
//fs.rm(path[, options], callback)
//options --- recursive < boolean > If true, perform a recursive removal.
//In recursive mode operations are retried on failure.Default: false.
    // fs.rmdir("./copy", { recursive: true }, function (err) {
    //     if (err) console.error(err.message);
    //     else console.log("removed")
    // })



// ------------------------------HTTP--------------------------------------------
const http = require('http');
// http.createServer([options][, requestListener])
const server = http.createServer(function(req, res){
res.end("hello world")
})

server.listen(3000);