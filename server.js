/**
*	<app>.js
* @author Timon Mueller and Cedric Droz
*/

/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

const Express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const router = require("./webServer/router.js");

/*----------------------------------------------------------------------------*/
/* DECLARATION AND INITIALIZATION                                             */
/*----------------------------------------------------------------------------*/

/* define the Port for the webinterface */
const PORT = 80;

/* creates a new instance of Express */
const app = new Express();

/*----------------------------------------------------------------------------*/
/* PRIVATE FUNCTIONS                                                          */
/*----------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------*/
/* MAIN                                                                       */
/*----------------------------------------------------------------------------*/

/* listens on port 1893 */
app.listen(PORT, function() {
    console.log("The server is running on port " + PORT);
})

/* parses the JSON requests */
app.use(bodyParser.json());


/* uses the external router */
app.use("/", router);


/* handles all static files */
app.use(Express.static("webServer/public"), function(error, res, req) {
        if (error) {
            res.status(404).send("Error 404 could not find the requested file");
            let log = error._parsedOriginalUrl.path;
                fs.writeFile("./webServer/log/log.json", log, function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log("The log was saved!");
            });
        }
});

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
