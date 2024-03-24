const fs = require('fs');

// Reading Java code text from file
const javaCodeText = fs.readFileSync('trash.java', 'utf8');

// Saving Java code text as JSON string
const jsonOutput = {
    "java_code": javaCodeText
};

// Writing JSON to file
fs.writeFileSync('output.json', JSON.stringify(jsonOutput, null, 4));

console.log("Conversion completed. Java code text saved as JSON in output.json");
