async function orderfood(name,time){
    return new Promise((resolve,reject) =>{
        if(name=="burger")
            reject("burger out of stock");
        setTimeout(() => {
            resolve(name +" prepared")
        }, time);
    });
}

async function restaurent(){
    console.log("task started");
    const pizza =await orderfood("pizza",1000);
    console.log(pizza);
    try {
        const burger =await orderfood("burger",1000);
        console.log(burger);     
    } catch (error) {
        console.log(error);
    }
    const burger =await orderfood("burger",1000);
    console.log(burger);
    const coffee =await orderfood("coffee",1000);
    console.log(coffee);
    console.log("all order cmpleted");
}
restaurent();