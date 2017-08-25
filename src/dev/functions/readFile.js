function readFile(filePath, callback, ...values) {
    fetch(filePath)
    .then(response => response.json())
    .then((data) => callback(data, ...values))
    .catch(function(err) {
        console.log("Error reading data file from server: " + err);
    });
}

export default readFile;

