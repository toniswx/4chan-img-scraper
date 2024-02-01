Image Scraper

This Node.js script scrapes images from a specified 4chan thread and downloads them into a designated folder.
Requirements

    Node.js installed on your machine

Installation

    Clone or download the repository.

    Navigate to the project directory in your terminal.

    Install the required dependencies using npm:

    bash

    npm install axios cheerio

Usage

    Open the index.js file.

    Modify the url variable to the 4chan thread URL you want to scrape.

    Adjust the folderName variable to set the name of the folder where the images will be saved.

    Run the script using Node.js:

    bash

    node index.js

    Once the script completes, check the specified folder to find the downloaded images.

Code Overview

    The script uses axios to make HTTP requests and fetch the HTML content of the 4chan thread.
    It utilizes cheerio to parse the HTML and extract image URLs from the thread.
    Images are then downloaded using the built-in https module.
    The script creates the specified folder if it does not exist and saves the images into it.
    Each downloaded image is given a random filename to avoid overwriting existing files.

Disclaimer

This script is provided for educational purposes only. Use it responsibly and respect the terms of service of the websites you scrape.
