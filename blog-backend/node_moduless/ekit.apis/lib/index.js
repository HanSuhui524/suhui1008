(function(){
    'use strict';
    module.exports={

        //open apis
        get commonCore(){return require('common-core-api');},
        get publicSchool(){return new Error('Public School Api'); },


        //info apis
        get wikiMedia(){return new Error('Wikiepedia Wiki Media Api');},
        get wolframAlpha(){ return new Error('Wolfram Alpha Api'); },

        //google apis
        get googleMaps(){return new Error('Google Maps Api'); },
        get googleClassroom(){return new Error('Google Classroom Api');},
        get google(){ return new Error('Google Api'); },

        //facebook
        get facebook(){return new Error('Facebook Api');},

    };
})();