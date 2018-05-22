var orm = require("../config/orm.js");

var burger = {
    all: function(modelCallback){
        orm.selectAll("burgers", function(result){
            modelCallback(result);
        });
    },

    insert: function(burgerName, modelCallback){
        orm.insertOne("burgers", burgerName, function(result){
            modelCallback(result);
        });
    },

    update: function(setObj, conditionObj, modelCallback){
        orm.updateOne("burgers",setObj, conditionObj, function(result){
            modelCallback(result);
        });
    }
};

module.exports = burger;