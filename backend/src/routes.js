import { Router } from "express";
import shell from "shelljs";

const routes = new Router();

routes.post("/", (req, res) => {
  const { command } = req.body;
  console.log(command)
  const t = shell.exec(command);
  console.log(t.stdout)
  return res.json({ message: t.stdout });
});

export default routes;