const { run_autocom } = require("./gemini_autocom.controller.js");

const process_autocom = async (req, res) => {
  try {
    const { code } = req.body; // Assuming the code is sent in the "code" field
    const textResult = await run_autocom(code); // Pass the code input to the run_autocom function
    console.log(textResult);
    res.send(textResult);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  process_autocom,
};
