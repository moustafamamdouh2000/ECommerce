
const express=require('express')

const app = express()
// view engine setup
app.use(express.json());
// app.use('/public', express.static(path.join(__dirname, 'static', 'public')))

  var admin = require("firebase-admin");

var serviceAccount = require("./creds.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ""
});


let data;
let data_get = []
//must fetch data first before calling the publish
app.get('/getAllData',async (req,res)=>{
  for(var x = 1 ;x<=20;x++){
    db.collection('Items').doc(`item${x}`).get().then(function(doc) {
      data_get.push(doc.data())
    });
  }
  console.log('data fetched');
  setTimeout(()=>res.send(data_get),2000)
})




let db=admin.firestore();
let a=db.collection('Items')

app.post('/publishData',async (req,res)=>{
  data_get.forEach(async element => {
    let docRef=a.doc(`item${element.id}`)
    await docRef.delete()
    await docRef.create({
      id: element.id,
      title: element.title,
      price: element.price,
      description: element.description,
      category: element.category,
      image: element.image,
      rating: element.rating.rate,
      rating_count: element.rating.count
    });
    });
  res.send('done');
})


app.get('/getSignleData/:id',async (req,res)=>{
  const item_id= req.params.id
  console.log(item_id);
  db.collection('Items').doc(`item${item_id}`).get().then(function(doc) {
    res.status(200).send(doc.data())
  });
})

app.listen(8383, () => {
  console.log('Server listening on port 8383');
});



// const { getDatabase } = require('firebase-admin/database');

