import express from "express"
import cors from "cors"
import router from "./routes/index"
import mongoose from "mongoose"
const app = express()

app.use(express.json());
app.use(cors())

app.use('/api', router)
mongoose.connect("mongodb://localhost:27017/demo-node")
export const viteNodeApp = app






// import express from "express"
// import cors from "cors"
// import router from "./routes/index";
// import mongoose from "mongoose";
// const app = express()

// app.use(express.json());
// app.use(cors())

// app.use("/api", router);
// mongoose.connect("mongodb://localhost:27017/demo-node")
// export const viteNodeApp = app;