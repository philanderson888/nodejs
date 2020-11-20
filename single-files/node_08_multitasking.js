/**
 * Created by Phil on 08/01/2016.
 */
function request_data(parameter){
    console.log("Client has requested data with ID parameter " + parameter);
    // Query the database but also let me know when
    // Database query is complete by running this
    // Anonymous function for me, will you?!
    queryDatabase(function(){
       console.log("Database data has been retrieved for ID " + parameter);
    });
}

// simulate database query (which has delay)
function queryDatabase(RunThisFunctionWhenDone){
    setTimeout(RunThisFunctionWhenDone,2000);
}

request_data(1);
request_data(2);
request_data(3);
request_data(4);
request_data(5);

