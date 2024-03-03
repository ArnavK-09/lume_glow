/**
 * Imports required */
import { glow } from "npm:nue-glow";
import type { Page, Plugin, Site } from "https://deno.land/x/lume/core.ts";

/**
 * Plugin Options
 */
export interface Options {
  /**
   * tells glow the language of the code. This is optional. When not provided, glow attempts to guess the language.
   */
  language?: string;
  /**
   * is a boolean flag indicating whether line numbers should be rendered
   */
  numbered?: boolean;
  /**
   * configure package size for glow styles
   */
  size?: "nano" | "default";
}

/**
 * Hosted Links for Glow css
 */
const LINKS = {
  default:
    "https://raw.githubusercontent.com/nuejs/nue/master/packages/glow/minified/glow.css",
  nano: "https://raw.githubusercontent.com/nuejs/nue/master/packages/glow/minified/glow.nano.css",
};

/**
 * A plugin to glow your code
 */
export default function (userOptions?: Options): Plugin {
  return (site: Site) => {
    site.process([".html"], processCodeHighlight);
    async function processCodeHighlight(pages: Page[]) {
      for (const page of pages) {
        const allCodeBlocks: HTMLElement[] = Array.from(
          page.document.getElementsByTagName("code")
        );

        // markup all codeblocks
        allCodeBlocks.forEach((element: HTMLElement) => {
          try {
            let language;
            if (Array.from(element.classList)[0]?.includes("language-")) {
              language = element.classList[0].replace("language-", "");
            }
            if (element.parentElement?.tagName == "PRE") {
              element.parentElement!.setAttribute("glow", "");
              element.parentElement!.innerHTML = glow(element.innerHTML, {
                language: userOptions?.language ?? language,
                numbered: userOptions?.numbered,
              });
            }
          } catch (error) {
            console.log(
              `Error glowing code block in ${page.sourcePath}: ${error}`
            );
          }
        });

        // add glow styles to page
        if (Array.from(allCodeBlocks).length !== 0) {
          const stylesheet =
            userOptions?.size == "nano" ? LINKS.nano : LINKS.default;
          const src = await fetch(stylesheet);
          const css = await src.text();
          const tag = page.document.createElement("style");
          tag.innerHTML = css + `pre { overflow-x: auto }`;
          page.document.getElementsByTagName("head")[0].appendChild(tag);
        }
      }
    }
  };
}
