function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let success=false;
            if(success){
                resolve("data fetch successfully")
            }else{
                reject("Error fetching data")
            }
        }, 3000);
    })
}


fetchData()
 .then((data)=> console.log(data))
 .catch((error)=>
 console.error(error)
 )

 function Person(name){
    this.name=name;
 }

 Person.prototype.greet=function(){
    console.log(`Hello,my name is ${this.name}`)
 }

 let hitesh=new Person("Hitesh");
 hitesh.greet();