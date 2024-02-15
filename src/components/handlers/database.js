// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

// create constant that object that refers to database
const hostDb = openDatabase({name: 'host.db'});

// create contant that contains the name of the lists table
const hostsTableName = 'hosts';

module.exports = {
    // declare function that will create lists table
    createHostsTable: async function() {
        // declare transaction that will execute SQL
        (await hostDb).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${hostsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    email TEXT,
                );`,
                // arguments passed when using SQL prepared statements
                [],
                // callback functions to handle results
                () => {
                    console.log('Lists table created successfully.');
                },
                error => {
                    console.log('Error creating lists table ' + error.message);
                },
            );
        });

    },

    // declare function that will insert a row of data into the lists table
    
    addList: async function (name, email){
        // declare transaction that will execute the SQL
        (await hostDb).transaction(txn => {
            // execute SQL
            txn.executeSql(
                `INSERT INTO ${hostsTableName} (name, email) VALUES ("${name}", "${email}")`,
                // arguements passed when using SQL prepared statements
                [],
                // callback functions to handle results
                () => {
                    console.log(name + ' added successfully');
                },
                error => {
                    console.log('Error creating list' + error.message);
                },
            );
        });
    },
};
