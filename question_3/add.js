const fs = require("fs");

const dir= "./logs";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  process.chdir(dir);
  for (let i = 0; i < 10; i++) {
    fs.writeFile(`log${i}.txt`, ` Hello Log file number ${i}`, (err) =>{
     if( err) 
      console.error(`Error for 'log${i}.txt'`) 
     else
     console.log(`file 'log${i}.txt' created.`)
    });
   
  }
//   for (let i = 0; i < 10; i++) {
//     fs.rename(`log${i}.txt`, `console${i}.txt`, () => {
//         console.log(`File Renamed! to console${i}`);
//       });
//   }
 
  

