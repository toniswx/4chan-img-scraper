const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const fsPromieses = require("fs/promises");
const https = require("https");
const http = require("http");
const ejs = require("ejs");


const template = fs.readFileSync("./views/index.ejs", "utf8");
const compiledTemplate = ejs.compile(template);

const server = http.createServer((req, res) => {
  const route = req.url;

  switch (route) {
    case "/": {
      // Set the content type to HTML
      res.setHeader("Content-Type", "text/html");

      // Render the template with data
      const renderedTemplate = compiledTemplate({
        title: "4-chan scraper ",
        message: "Welcome to 3chan scraper",
      });

      // Send the rendered template as the response
      res.end(renderedTemplate);
      break
    }
    case "/getData": {

      let body = "";

      req.on("data", (chunk) => {
        body = chunk.toString();
      });

      req.on("end", () => {
        const requestData = JSON.parse(body);

        const url = requestData.dataInput;
        const path = `${requestData.dirInput}/`;
 

        
        const pathExists = fs.existsSync(path);


        if (!pathExists){
         try{
          fs.mkdirSync(path)
         }
         catch(err){

          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.write('error at directory,check path');
          res.end();    
         }
        }



        async function fetchData() {
          const response = await axios.get(url);
          return response.data;
        }

        async function extractImages() {
          const html = await fetchData();
          const $ = cheerio.load(html);

          const imageUrls = [];

          $("a.fileThumb").each((index, element) => {
            imageUrls.push("https://" + element.attribs.href.slice(2));
          });

          return imageUrls;
        }

        extractImages()
          .then((imageUrls) => {
            imageUrls.forEach((element) => {
              download(element, path).then(()=>{
                res.end(JSON.stringify())
              })
              
            })
          })
          .catch((error) => {
            console.log(error)
          });

        const download = async (imageUrl, destinationPath) => {
          https
            .get(imageUrl, (response) => {
              const contentType = response.headers["content-type"];

              if (fs.existsSync(path)) {
                const fileStream = fs.createWriteStream(
                  destinationPath +
                    Math.floor(Math.random() * 23123120 + 12301239103) +
                    "." +
                    contentType.split("/")[1]
                );
                response.pipe(fileStream);

                fileStream.on("finish", () => {
                  fileStream.close();
                });
              }
            })
            .on("error", (error) => {
              ("Error downloading image:", error);
            });
        };
      });


 
      break; // Don't forget to break out of the switch statement
    }
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
