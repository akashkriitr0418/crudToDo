const mongoose =  require("mongoose");
const db_pass =  process.env.dbPassword;
const url = `mongodb+srv://akmongo_city:${db_pass}p@cluster0.ohauo.mongodb.net/todo_data?retryWrites=true&w=majority`
async function connect(){
   try{
      await mongoose.connect(url,{
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log("connected");
        
   }catch(err){
      console.log(err);
   }
}
module.exports = connect();