//!Objects

let products = {
  ProductCategory: "Mobile",
  Brand: "apple",
  model: "Iphone 16",
  adapterInToBox: false,
  fastChargingSupported: true,
  price:100000,

  camera: {
    primary: 12,
    secondary: 8,
    frontCamera: 5,
    telePhotoLance: true,
    livePhoto: true,
    AiCameraPower: "coming in next update",

    features: {
      name: "Siri",
      poweredBy: "AI",
      voiceCommands: ["Hey Siri", "Set a timer", "Play music"],

      core: {
        waterProfe: true,
        faceId:true,

      },
    },
  },
};
console.log(products);

//! dot Notation to bring a single Value, dot diye value access kora

var company = products.Brand;
console.log(company)
var picture=products.camera;
console.log(picture)
products.camera.features.poweredBy="Siri will be a good Ai assistend and help you to learn any new thing"
console.log(products.camera.features)
products.camera.features.voiceCommands[1]="Siri like chatgpt";
console.log(products.camera.features.voiceCommands)

//! bracket notation , third [ ] bracket diye values access kora

var camera = products.camera['primary']
console.log(camera)

console.log(products.camera.features["name"])

//! changing values by bracket notation or dot notation

products.Brand='Samsung'
console.log(products)

products['price']=200;


let laptop ={
    brand:'apple',
    model:'m2',
    chargerInToBox:true,
    display:'LCD',
    ram:8,
    ssd:256,

    display:{
        monitor:15.3,
        notch:true,
        screen:'posative',
    }

}
console.log(laptop)

//! find property like brand, model,ram etc by USING Object.(name of object)

let property= Object.keys(laptop)
console.log(property)

//! find Values from Object
let ItemsName = Object.values(laptop)
console.log(ItemsName)



var mobile ={
    brand:'Samsung',
    ram:4,
    rom:128,
    isNew:true,
    fastCharger:true,
    color:"black",
}

for(let items in mobile){
    console.log(items)
    console.log(mobile[items])
}

let keys = Object.keys(mobile)
console.log(keys)

for( let values of keys ){
    console.log(values, " : " , mobile[values])
}