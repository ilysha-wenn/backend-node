import  express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from 'express-fileupload'
const PORT = 5005;
const DB_URL = `mongodb+srv://user:user@cluster0.svtsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app = express();


// endpoint
app.use(express.json());
app.use(fileUpload({})) // express-middleware
app.use('/api', router)


async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser: true});
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT ", + PORT))
    }catch (e){
        console.log(`Error ${e}`);
    }
}

startApp();