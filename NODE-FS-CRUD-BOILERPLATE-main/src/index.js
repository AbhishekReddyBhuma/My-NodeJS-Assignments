const fs = require('fs/promises')
const path = require("path");
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
    fs.writeFile(path.join(__dirname,fileName),fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
    const data = await fs.readFile(fileName,"utf-8")
    console.log(data);
    
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
    fs.appendFile(fileName,fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
    fs.unlink(fileName);
}

//myFileWriter("testFile.txt","Hello");
//myFileReader("testFile.txt");
//myFileUpdater("testFile.txt"," World");
myFileDeleter("testFile.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }