#!/usr/bin/env node
//async read

const{readFile} = require('fs');
const argument = process.argv[2];  //get argument of file path passed in


if(argument){//if there's an argument passed in,
    readFile(argument, (err, data)=>{//read this argument file
        if(err) return console.error(err);//deal with errors at the beginning
        process.stdout.write("async data:", data); //write to the console asynchronously
    });
}else{//if no argument, end process
    process.exit();
}