async function orderfood(name,time){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(name +" prepared")
        }, time);
    });
}

async function restaurent(){
    console.log("task started");
    const pizza =await orderfood("pizza",1000);
    console.log(pizza);
    const burger =await orderfood("burger",1000);
    console.log(burger);
    const coffee =await orderfood("coffee",1000);
    console.log(coffee);
}
restaurent();