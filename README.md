
# 4chan images/gif/webm/video scraper

[![Node.js Version](https://img.shields.io/badge/Node.js-v14.17.0-green)](https://nodejs.org/)
[![Dependencies](https://img.shields.io/badge/Dependencies-axios%20%7C%20cheerio-blue)](https://www.npmjs.com/package/axios)


# 4chan scraper 





Welcome to our project! This Node.js server allows users to fetch HTML content from a specified URL, extract image URLs from the fetched HTML, and download the images to a specified directory.

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/de-Padua/4chan-img-scraper.git
    ```

2. Navigate to the project directory:
    ```bash
    cd <project_directory>
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the server:
    ```bash
    npm start
    ```

2. Access the server at `http://localhost:3000`.


3. Use the following routes:

    - `/`: Renders a basic HTML template.
    - `/getData`: Accepts a JSON payload containing a URL and directory path, fetches HTML content from the URL, extracts image URLs, and downloads the images to the specified directory.


## WARNING

### Downloading Files to Nested Folders

When downloading files, please ensure that the specified directory path exists. If you attempt to download files to a nested folder that doesn't exist, the program will encounter an error and may crash. To prevent this, make sure to create the necessary nested folders before initiating the download process.


When using the `/getData` route to download files to nested folders, please be aware of the following:

- The program will attempt to create the specified directory path if it doesn't exist.
- However, if there are multiple nested folders within the specified path that do not exist, the program will encounter an error and may crash.

For example:
- If the specified directory path is `folder1/folder2/THIS_FOLDER_DOES_NOT_EXIST`, and `folder1` and `folder2` exist but `THIS_FOLDER_DOES_NOT_EXIST` does not, the program will create `THIS_FOLDER_DOES_NOT_EXIST` successfully.
- However, if the specified directory path is `folder1/folder2/THIS_FOLDER_DOES_NOT_EXIST/THIS_ONE_DOES_NOT_EXIST_TOO`, and both `folder1` and `folder2` exist, but `THIS_FOLDER_DOES_NOT_EXIST` and `THIS_ONE_DOES_NOT_EXIST_TOO` do not, the program will encounter an error and may crash.

To avoid such errors, ensure that all nested folders within the specified directory path exist before initiating the download process. You can create missing folders manually or programmatically before making the request.





## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

