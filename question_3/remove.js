const fs = require("fs");
const dir= "./logs";
    if (fs.existsSync(dir)) {
     process.chdir(dir);
      fs.readdir(process.cwd(), (err, files) => {
        for(let file of files) {
          fs.unlink(file, (err) =>{
           if( err) 
            console.error(` file '${file}' with error.`) 
            else
            console.log(`Deleted file '${file}'`)
        });
        }
    });
    };
  