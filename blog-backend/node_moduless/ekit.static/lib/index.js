'use strict';
const models=require('./models')


const ModelNamed=function(name){
    var o;
    switch(name){
        case 'school':
            o = models.academic.school;
            break;
        case 'school.category':
            o = models.academic.school.category;
            break;
        case 'organization':
            o = { type:'organization' };
            break;
        case 'state':
            o = { type:'state' };
            break;
        case 'jurisdiction':
            o = models.academic.jurisdiction;
            break;
        case 'academic':
            o = models.academic;
            break;
        case 'nation':
            o = models.nation;
            break;
        case 'usa':
            o = {
                name:'usa',
                title:'United States of America',
                states:models.nation.state.usa.list,
                type:'nation'
            };
            break;
        case 'states':
            o = models.nation.state.usa.list;
            break;
        default:break;
    }
    if(typeof o === 'undefined') return models;
    return o;
}
module.exports=function getModelNamed(name){ return ModelNamed(name);};