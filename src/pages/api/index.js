// pages/api/data
import nc from "next-connect";

const handler = nc()
  // express like routing for methods
  .get((req, res) => {
    res.json({ data: "Hello world" });
  })
  .post((req, res) => {
    res.json({ data: "world" });
  })
  .put(async (req, res) => {
    res.json({ data: "Hello world" });
  });

export default handler;
