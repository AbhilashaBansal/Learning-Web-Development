//////////////////////// CALLBACKS ////////////////////////
//harder way to write asynch code that runs synchronously, using nesting

function downloadFile(url, downloaded){
    console.log("Starting file download from " + url + ".");
    setTimeout(function(){
        console.log("Download completed!");
        let path = url.split('/').pop();
        downloaded(path); //callback fn 1
    }, 5000);
}

function compressFile(path, compressed){
    console.log("Starting the compression of file " + path + ".");
    setTimeout(() => {
        console.log("Compression finished!");
        let compressed_file_path = path.split('.')[0] + ".zip";
        compressed(compressed_file_path); //callback fn 2
    }, 5000);
}

function uploadFile(compressed_file_path, uploaded){
    console.log("Starting the upload of file " + compressed_file_path + ".");
    setTimeout(() => {
        console.log("Upload finished!");
        let upload_path = `http://localsystem/${compressed_file_path}`;
        uploaded(upload_path); //callback fn 3
    }, 5000);
}

//final calling of fns in nested way
downloadFile("http://abc.com/song.mp3", function(path){
    //fn that tells, what to do on download completion
    console.log("File downloaded as " + path + ".");
    compressFile(path, function(compressed_file_path){
        //fn that tells, what to do on completion of compression
        console.log("File compressed as " + compressed_file_path + ".");
        //now upload it
        uploadFile(compressed_file_path, function(upload_path){
            //what to do after upload
            console.log(`File uploaded at ${upload_path}.`);
            console.log("Everything done!");
        });
    });
});
//////////////////////// END CALLBACKS ////////////////////////


//////////////////////// PROMISES ////////////////////////
//easier way to write callbacks and make async code run synchronously
//linear code

function downFile(url){
    return new Promise (function(resolve, reject){
        console.log("Starting file download from " + url);

        //error check
        if(!url.startsWith('http')){
            throw new Error ("Incorrect URL!");
        }

        setTimeout(function(){
            console.log("Download completed!");
            let path = url.split('/').pop();
            resolve(path); //1st callback thru resolve fn
        }, 5000);
    });
}

function compFile(path){
    return new Promise (function(resolve, reject){

        //error checking
        if(["mp3", "ogg"].indexOf(path.split(".")[1])==-1){
            throw new Error ("Only mp3 & ogg formats are supported!");
        }

        console.log("Starting the compression of file " + path);
        setTimeout(() => {
            console.log("Compression finished!");
            let compressed_file_path = path.split('.')[0] + ".zip";
            resolve(compressed_file_path); //2nd callback thru resolve fn
        }, 5000);
    });
}

function upFile(compressed_file_path){
    return new Promise (function(resolve, reject){
        console.log("Starting the upload of file " + compressed_file_path);
            setTimeout(() => {
                console.log("Upload finished!");
                let upload_path = `http://localsystem/${compressed_file_path}`;
                resolve(upload_path); //3rd callback thru resolve fn
            }, 5000);
    });
}


//FINAL CALLING USING PROMISES -> NESTED

// downFile("http://abc.com/song.mp3")
//     .then(function(path){
//         console.log("File downloaded as " + path);
//         compFile(path)
//             .then(function(compressed_file_path){
//                 console.log("File compressed as " + compressed_file_path);
//                 upFile(compressed_file_path)
//                     .then(function(upload_path){
//                         console.log("File uploaded at " + upload_path);
//                         console.log("All done!");
//                     });
//             });
//     });


//FINAL CALLING USING PROMISES -> LINEAR & EFFICIENT

setTimeout(() => {
    downFile("http://abc.com/song.mp3")
    .then(compFile)
    .then(upFile)
    .then(function(upload_path){
        console.log("File uploaded at " + upload_path);
        console.log("All done!");
    })
    .catch(function(error){
        //same catch for all thens, but alag alag bhi laga sakte hain
        console.error(error.message);
    });
}, 20000);