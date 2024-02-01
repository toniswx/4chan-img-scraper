
# 4chan images/gif/webm/video scraper

[![Node.js Version](https://img.shields.io/badge/Node.js-v14.17.0-green)](https://nodejs.org/)
[![Dependencies](https://img.shields.io/badge/Dependencies-axios%20%7C%20cheerio-blue)](https://www.npmjs.com/package/axios)




This Node.js script scrapes images/gif/webm/video from a specified 4chan thread and downloads them into a designated folder.
Requirements


   * Node.js installed on your machine


## Instalação

Installation

* Clone or download the repository.
* Navigate to the project directory in your terminal.
* Install the required dependencies using npm:

  ```bash
  npm install axios cheerio
  ```

  ```bash
  npm install axios axios
  ```

## Usage


* Open the index.js file.

* Modify the url variable to the 4chan thread `URL` you want to scrape.

* Adjust the folderName variable to set the name of the folder where the images will be saved.


* Run the script using Node.js:
```node
node index.js
``` 

Once the script completes, check the specified folder to find the downloaded images.
## FAQ


### Q: Will this script download all formats of images?

A: Yes, the script is designed to download all image formats that are present in the specified 4chan thread. It extracts image URLs and downloads them regardless of their format.



### Q: How does the script handle existing files with the same name?
A: To prevent overwriting existing files, each downloaded image is given a random filename. This ensures that previously downloaded images are not replaced by new ones with the same name.

### Q: Can I customize the destination folder for downloaded images?

A: Yes, you can modify the folderName variable in the script to specify the name of the folder where the images will be saved. By default, it's set to "BOWC", but you can change it to any desired folder name.

### Q: Is there any error handling implemented in the script?

A: Yes, error handling is implemented to handle various scenarios such as failed HTTP requests, network errors, or file writing errors. Any encountered errors will be logged to the console with detailed messages to assist in troubleshooting.
