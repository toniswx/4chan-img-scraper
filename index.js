const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const fsPromieses = require("fs/promises");
const https = require("https");






const url = "https://boards.4chan.org/gif/thread/26640534";
const folderName = "BOWC";






const path = `/home/slicky/Documentos/projects/scraper/${folderName}/`;


const pathExists = fs.existsSync(path)

if(!pathExists) fs.mkdirSync(path)

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
      download(element, path);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const download = (imageUrl, destinationPath) => {
  https
    .get(imageUrl, (response) => {

        const contentType = response.headers['content-type'];
     
      if (fs.existsSync(path)) {
        const fileStream = fs.createWriteStream(
          destinationPath + Math.floor(Math.random() * 23123120 + 12301239103) + "." + contentType.split("/")[1]
        );
        response.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
        });
      }
     
    })
    .on("error", (error) => {
      console.error("Error downloading image:", error);
    });
};
