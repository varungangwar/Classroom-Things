async function fetchdata(){
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        // console.log(data);
        data.forEach(element => {
            console.log(`login ${element.login} ID ${element.node_id} URL ${element.url}`);
        })
    } catch (error) {
        console.log(error);
    }
}
fetchdata();
