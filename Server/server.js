import app from "./app.js";
import connectDB from "./DB/connection.js";

const PORT = process.env.PORT;

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: ${process.env.PORT}`)
    })
    app.on("error", () => {
        console.log("Error: ", error)
        throw error
    })
}).catch((err) => {
    console.log("MONGODB connection failed !!!", err)
})
