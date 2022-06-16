const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path')
const http = require('http');
 




app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
 });


  app.get("/events", (req, res) => {
    const jsonsInDir = fs.readdirSync('./bundle/support-bundle-2022-04-22T15_39_48/cluster-resources/events/').filter(file => path.extname(file) === '.json');
    var x = [];
    jsonsInDir.forEach(file => {
      const fileData = fs.readFileSync(path.join('./bundle/support-bundle-2022-04-22T15_39_48/cluster-resources/events/', file));
      const json = JSON.parse(fileData.toString());
    x.push(json)
    });

    x.forEach(element => {
     console.log(element) 
    });
    res.sendStatus(200);
  });


