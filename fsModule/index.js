const fs = require('fs');

//readfile
fs.readFile('./pass.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//writefile
fs.writeFile('message.txt', 'Hello Node.js', 'utf8', (err,data)=>{
  if(err) console.log(err);
  console.log("File created.");
});

//unlink
fs.unlink('message.txt',(err,data)=>{
  if(err) console.log(err);
  else console.log("File unlinked");
})

// create folders
fs.mkdir('./uploads/img',{recursive:true},(err)=>{
  if(err) console.log(err);
  else console.log('Folders created.')
})

// remove folders
fs.rmdir('./uploads/img',{recursive:true},(err)=>{
  if(err) console.log(err);
  else console.log('Folders removed.')
})