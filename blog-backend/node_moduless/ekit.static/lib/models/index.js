'use strict';
const doc=require('./doc')

module.exports={
    nation:{
        state:{
            usa:{
                list:[]
            }
        }
    },
    academic:{
        discipline:{
            list:[]
        },
        school:{
            category:{
                list:[]
            }
        },
        jurisdiction:{
            list:[
                {type:'state'},
                {type:'organization'},
                {type:'school'},
                {type:'nation'}
            ]
        }
    }
};

module.exports.academic.discipline.list=doc.list[0];
module.exports.academic.school.category.list=doc.list[1];
module.exports.nation.state.usa.list=doc.list[2];
