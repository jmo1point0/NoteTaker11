const router = require("express").Router();
const db = require("../app/db.json")
const path = require("path")
 

// GET /api/notes - to return notes.html file
router.get("/api/notes",(req,res)=>{
    db.forEach((note,index)=>{
        note.id=index+1
    })
    res.send(db)
})

 /*GET * to return index.html files */
router.get("*", (req,res) => {
  const htmlpath=path.join(__dirname,"../public/index.html")
    res.sendFile(htmlpath)
})

/*GET notes to return notes.html files */
router.get("/notes",(req,res)=>{
    const htmlpath=path.join(__dirname,"../public/notes.html")
    res.sendFile(htmlpath)
})

router.get("/assets/script.js",(req,res)=>{
    const htmlpath=path.join(__dirname,"../public/assets/script.js")
    res.sendFile(htmlpath)
})

router.get("/assets/style.css",(req,res)=>{
    const htmlpath=path.join(__dirname,"../public/assets/style.css")
    res.sendFile(htmlpath)
})

/* POST /api/notes - should receive a new note to save on the request body, add it to the db.json file, and then return new note to the client. */
router.post("/api/notes",(req,res)=>{
    db.push(req.body)
    if(!db){
        db[db.length].id=db.length
    }
    res.send(db)
})



/* ****BONUS**** DELETE /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 
(look into 'npm' packages that could do this for you).  */




module.exports = router