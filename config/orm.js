var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, ormCallback){
        var queryString = "SELECT * FROM ??"
        connection.query(
            queryString,
            [tableName],
            function(error, result){
                if(error) throw error;
                console.log(result);
                ormCallback(result);
            }
        )
    },

    insertOne: function(tableName, newBurgerName, ormCallback){
        var queryString = "INSERT INTO ?? SET ?"
        connection.query(
            queryString,
            [tableName, {id: NULL, burger_name: newBurgerName, devoured: FALSE}],
            function(error, result){
                if(error) throw error;
                console.log(result);
                ormCallback(result);
            }
        )
    },

    updateOne: function(tableName, setObj, conditionObj, ormCallback){
        var queryString = "UPDATE ?? SET ? WHERE ?"
        connection.query(
            queryString,
            [tableName, setObj, conditionObj],
            function(error, result){
                if(error) throw error;
                console.log(result);
                ormCallback(result);
            }
        )
    }

}

module.exports = orm;