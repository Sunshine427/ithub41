const express = require("express")

const app = express()

app.get("/",(req,res)=>{
	res.end(console.log(2))
})
app.listen(3000,()=>{
	console.log("running....")
})