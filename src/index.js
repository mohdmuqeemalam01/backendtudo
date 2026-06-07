import express from 'express'
import mysql from 'mysql2/promise'
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });



const app = express()
app.use(cors());
app.use(express.json());
const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log("host",process.env.DB_HOST)
// db.connect((err)=>{
//     if(err){

//         console.log(err)
//     }
//     else
//     {
//         console.log("Connected");
//     }
// })


app.get("/home",express.json(),  async (req, res) => {
    // const sql='select * from student';
    // db.query(sql,(err,result)=>{
    //          if(err){
    //             return res.json(err)
    //          }
    //          return res.json(result)
    // })
    try {
        const sql = 'select * from student';
        const [row] = await db.execute(sql);
        console.log(row)
        return res.json(row)

    }
    catch (err) {
        console.log(err)
        return res.json(err)
    }


})

app.delete('/home/:id', async (req, res) => {
    try {
        const sql = 'delete  from student where id=?';
        const studentId = req.params.id;
        const [row] = await db.execute(sql, [studentId]);
        if(row.affectedRows===0){
            return res.status(404).json({erro:'student not found'})
        }
        return res.status(200).json({message:"Deleted"})
           
    }
    catch (err) {
        console.log(err);
        return res.status(200).json(err)
    }

})

app.post('/home',express.json(), async (req, res) => {
    try {
        // express.json() right above forces req.body to exist here
        const { id, name, age, study } = req.body;

        // 1. Validation Check
        if (!id || !name || !age || !study) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // 2. Insert query using your brand new column names
        const sql = 'INSERT INTO student(id, name, age, study) VALUES(?, ?, ?, ?)';
        const [result] = await db.execute(sql, [Number(id), name, Number(age), study]);
        
        return res.status(201).json({ message: "Data Entered Successfully" });  
    }
    catch (err) {
        console.error("--- DATABASE CRASH DETAILS ---");
        console.error(err); 
        console.error("------------------------------");

        return res.status(500).json({ error: err.message || "Database Error" });
    }
});
 
app.put("/home/:id" , express.json(),async(req,res)=>{
    try{
        const studentId= req.params.id;
        const {name ,age,study}=req.body;
        const sql='update student set name=? , age=?, study=? where id=?';
        const [result]= await db.execute(sql,[name ,age,study,studentId]);
        return res.status(200).json({ message: "Student updated successfully" });
  
    }
    catch(err){
           console.error("--- DATABASE CRASH DETAILS ---");
        console.error(err); 
        console.error("------------------------------");

        return res.status(500).json({ error: err.message ||  "Database Error" });

    }
})

export default app;
