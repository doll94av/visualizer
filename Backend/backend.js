const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path')
const http = require('http');
const allowControlOrigin = "*"
const cors = require('cors');



//custom headers / cors config
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, namespace"
  );

  res.header("Access-Control-Expose-Headers", "custom-header");

  next();
});
app.options('*', cors()); // include before other routes


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
 });




  app.get("/events", (req, res) => {
    res.set('Access-Control-Allow-Origin', allowControlOrigin);
  
    //load in all JSON from a directory, specifically this will be events but in the future we will want to figure out a way to dynamically set the dir
  
    const jsonsInDir = fs.readdirSync('./bundle/support-bundle-2022-04-22T15_39_48/cluster-resources/events').filter(file => path.extname(file) === '.json');
    var jsonResponse = [];
    var parsedFileNames = [];
    jsonsInDir.forEach(file => {
      const fileData = fs.readFileSync(path.join('./bundle/support-bundle-2022-04-22T15_39_48/cluster-resources/events/', file));
      const json = JSON.parse(fileData.toString());
      
      //save the json and parsed filenames into arrays to map together later -- im sure this could be done all at once but my brain is small and I dont feel like optimizing right now

      //old stuff
      //parsedFileNames.push(path.parse(file).name)
      //jsonResponse.push(json)

      if(path.parse(file).name == req.headers.namespace){
        console.log(json)
        jsonResponse.push(json)
      }
    });


    res.send(jsonResponse)
    //send arrays off to get mapped together and response with JSON since we cannot directly send the map
    //old stuff
    //var joinedMap = createMappedArray(parsedFileNames, jsonResponse)
    //res.send(JSON.stringify([...joinedMap]));

  });


//map the arrays together
const createMappedArray = (key, value) => {

   const map = new Map();
   for(let i = 0; i < key.length; i++) {
     map.set(key[i], value[i])
   };
   return map;
 };
