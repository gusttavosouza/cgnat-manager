import { Router } from "express";
import shell from "shelljs";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello Gustavo" });
});

routes.get("/execute", (req, res) => {
  console.log("ENTRUUU");
  const t = shell.exec("ls -l");
  console.log(`AQUI È A PARADA ${t}`);
  console.log(t.length);
  return res.json({ message: t });
});

export default routes;
