const mypromise = new Promise((resolve, reject) => {
    let sucess =true;
    if(sucess){
        resolve("data send");
    }
    else{
        reject("data not send");
    }
});

mypromise.then((message)=>{
    console.log("Data: "+message)
}).catch((error) =>{
    console.log(error);
});