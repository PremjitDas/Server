import dotenv from "dotenv";
import connectDb from "./db/Db_connection.js";
import { app } from "./app.js";


dotenv.config()
connectDb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server Is Running At Port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        
        console.log("MongoDb Connection Failed !!!!",err);
    });