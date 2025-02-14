const application = require('./app');

const PORT = 8080;

application.listen(

    PORT, () => {

        console.log("Server is Running")
        console.log(`on port ${PORT} `)
        console.log(`URL http://localhost:${PORT}`);
    }
);

