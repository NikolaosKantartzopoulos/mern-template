const postAdmin = (req, res) => {
  console.log("post /");
  console.log(req.params.postNum);
  res.json({ message: "post /" });
};

const simpleAdminGet = (req, res) => {
  console.log("GET /");
  res.json({ message: "GET /" });
};

module.exports = { postAdmin, simpleAdminGet };
