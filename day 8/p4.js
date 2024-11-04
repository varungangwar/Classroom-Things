function fetchdata() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
          const students = [
            {name:"harry",score:20},
            {name:"oli",score:60},
            {name:"oggy",score:76},
            {name:"bob",score:10},
          ]
            resolve(students);
        },4000);
    });
}
fetchdata().then((data)=>{
    let sum =0;
    data.forEach((element) => {
        sum+=element.score;
    });
    console.log(sum);
}).catch((error)=>{
    console.log(error);
});