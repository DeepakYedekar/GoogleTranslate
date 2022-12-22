const db=require('../connection/db');

const create= (req,res)=>{
 const {fName,mName,lName,Address,City,Nationality,rollNo,Class}=req.body;
  const qry ="INSERT into students (first_name,middle_name,last_name,address,city,nationality,roll_no,class) values(?,?,?,?,?,?,?,?)";
 try{
   db.query(qry, [fName, mName, lName, Address, City, Nationality, rollNo, Class], function(err,results) {
    if(results){
      res.send("Student created successfully");
     }else{
      console.log(err);
     }
  })
 }catch(err){
  console.log("err",err);
 }
}

const findAll= (req,res)=>{
  try{
    db.query(`select * from students`, function(err,results) {
     if(results){
      res.json(results);
     }else{
      console.log(err);
     }

   })
  }catch(err){
   console.log(err);
  }
 }

const findOne= (req,res)=>{
const {RollNo}=req.params;
  try{
    const sql = `SELECT * FROM students WHERE roll_no = ${RollNo}`;
    db.query(sql, function(err,results) {
    if(results){
      res.send(results);
     }else{
      console.log(err);
     }     
   })
  }catch(err){
   console.log(err);
  }
 }

 const update= (req,res)=>{
   const { fName, mName, lName, Address, City, Nationality, Class }=req.body;
  const{RollNo}=req.params;
    try{
      const sql = `update students set first_name=?,middle_name=?,last_name=?,address=?,city=?,nationality=?,class=? where roll_no=?`;
      db.query(sql, [fName, mName, lName, Address, City, Nationality, Class, RollNo], function(err, results) {
      if(results){
        res.send('Student updated successfully');
       }else{
        console.log(err);
       } 
     })
    }catch(err){
     console.log(err);
    }
}


const Delete= (req,res)=>{
  const {RollNo}=req.params;
    try{
      const sql = "delete from employee where roll_no=?";
      db.query(sql,[RollNo], function(err, results) {
      if(results){
        res.send('Student Data deleted sucessfully');
       }else{
        console.log(err);
       }    
     })
    }catch(err){
     console.log(err);
    }
   }


module.exports ={
  create,
  findAll,
  findOne,
  update,
  Delete
}
