import Express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import routes from "./src/routes/index.js";
import message from "./src/messages/message.js";

const app = Express();
const PORT = process.env.PORT || 3001;

app.use(Express.json()); //phải đặt trước router
routes(app);


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is runing on http://localhost:${PORT}`);
        })
    })
    .catch((error) => {
        message.ERROR(error);
    })

