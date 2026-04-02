function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject({
                name:"chaicode",url:"https://chaicode.com"
            })
        }, 3000);
    })
}

async function getuserData() {
    try{
        console.log("Fetching user data...");
        const userData=await fetchUserData()
        console.log("User data fetch successfully");
        console.log("user data:",userData)
    }catch(error){
      console.log("Error fetching data",error);
    }
    
}

getuserData()


