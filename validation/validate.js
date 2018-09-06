#!/usr/local/bin/node
const fs = require('fs')
var xsd = require('libxml-xsd')

var schemaPath = 'JATS-journalpublishing0.xsd'
var xsdString = fs.readFileSync(schemaPath, 'utf-8')
var xmlString = fs.readFileSync('../examples/alpha/article.xml', 'utf-8')

xsd.parseFile(schemaPath, function(err, schema){
    console.log("Schema:", err)
    schema.validate(xmlString, function(err, validationErrors){
      // err contains any technical error
      // validationError is an array, null if the validation is ok
      console.log("Document:", err)
      console.log(validationErrors)
    });
  });

// const x = require('libxmljs')
//
// var xsdDoc = x.parseXmlString(xsdString)
// var xmlDoc = x.parseXmlString(xmlString)
//
// var result = xmlDoc.validate(xsdDoc);
// console.log("result:", result);
