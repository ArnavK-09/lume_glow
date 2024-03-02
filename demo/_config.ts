import lume from "lume/mod.ts";
import plugin from "../plugin.ts";
const site = lume();
site.use(plugin());
export default site;
