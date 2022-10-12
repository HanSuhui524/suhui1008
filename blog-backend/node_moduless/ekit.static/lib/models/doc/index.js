'use strict';
const jsonfile=require('jsonfile')
const fs=require('fs');
const LIB=fs.readdirSync(__dirname+'/lib')
class Doc{
    constructor(doc){
        if(typeof doc === "object" && doc !== null){
            Object.assign(this,doc);
        }else if(typeof doc === 'string'){
            doc=jsonfile.readFileSync(__dirname+'/lib/'+doc+'.json');
            Object.assign(this,doc);
        }
    }
}
const newDoc = function withDoc(doc){return new Doc(doc);};
newDoc.list=LIB.map((name)=>{
    var o={};
    o.name=name.replace('.json','')
    o.doc=new Doc(o.name)
    return o;
});

module.exports = newDoc;