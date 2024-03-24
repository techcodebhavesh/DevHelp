

const { run, run_autocom } = require("./gemini_autocom.controller.js");



const process_autocom = async (req, res) => {
  try{
    const { text } = req.body;
    //const normalText = text.toString(); // Assuming the text input is in the "text" field of the request body
console.log(text);

   // const normalText = JSON.parse(req.body); // Assuming the text input is in the "text" field of the request body
    const textResult=await run_autocom(text); // Pass the text input to the run function
     console.log(textResult);
    res.send(textResult);

  }
  catch (err) {
    res.status(500).send(err.message);}
  
  
};

  // Return the validated data
  

module.exports = {
  process_autocom,
  // retrieveApiKey
};
