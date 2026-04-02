let teaflavours=["green tea","black tea","oolong tea"];

const firstTea=teaflavours[0];


let cities=["London","Tokyo",'Paris','New York'];

const favoritecity=cities[2];

let teaTypes=["herbel tea","white tea","masala chai"];

teaTypes[1]="jasmine tea";
console.log(teaTypes[1]);

let citiesvisited=["Mumbai","Sdyney"];
citiesvisited[citiesvisited.length]="Berlin";
// citiesvisited.push("Berlin");


console.log(citiesvisited);


let teaOrders=["chai","iced tea","matcha","earl grey"]

let lastorder=teaOrders.pop();

console.log(lastorder);


let popularTeas=["green tea","oolong tea","chai"]

let softCopyTeas=popularTeas;

console.log(softCopyTeas);

let topcities=["Berlin","Singapore","New York"];
let hardCopyCities=[...topcities];

topcities.pop();

console.log([...hardCopyCities]);


let europeanCities=["Paris","Rome"];
let asianCities=["Tokyo","Bangkok"];

let worldCities=europeanCities.concat(asianCities)

console.log(worldCities);


let teaMenu=["Masala chai","oolong tea","green tea","earl grey"];

let menulength=teaMenu.length;

let cityBucketList=["Kyoto","London","Cape Town","Vancouver"];

let isLondonInList=cityBucketList.includes("London");

console.log(isLondonInList);


