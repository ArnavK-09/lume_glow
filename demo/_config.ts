// importing lume
import lume from "lume/mod.ts";

// importing plugin
import lume_glow from "../plugin.ts";

// creating site
const site = lume();

// configuring plugin
site.use(lume_glow({ numbered: true }));

// exporting
export default site;
