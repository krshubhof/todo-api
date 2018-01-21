const MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db) =>{
  if (err) {
     console.log('Unable to connect to mongodb server');
  }else {
    console.log('connected to database server');
  }


    db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
      if (err) {
        return console.log('unable to insert',err);
      }
      console.log('Inserted successfully');
    });

    db.close();
});
