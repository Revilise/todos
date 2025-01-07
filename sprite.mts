import fs from "fs";
import { parse } from "node-html-parser";

interface SpriteBundlerConfig {
  iconsFolder?: string,
  svgTest?: RegExp,
}

class Symbol {

  /**
   * Create instance of Symbol
   * @param name
   * @param text
   */
  constructor(name: string, text: string) {
    this.id = name;
    this.text = text;

    this.init();
  }

  init() {
    const root = parse(`<div>${this.text}</div>`).querySelector("svg");

    const viewBox = root.getAttribute("viewBox");
    const height = root.getAttribute("height");
    const width = root.getAttribute("width");

    const attrs = `id="${this.id}" viewBox="${viewBox}"${height && ` height="${height}"`}${width && ` width="${width}"`}`

    this.html = parse(`<symbol ${attrs}>${root.childNodes.join('')}</symbol>`);
    this.height = height;
    this.width = width;
    this.viewBox = viewBox;
  }
}

class SpriteBundler {

  static defaultCfg: SpriteBundlerConfig = {
    iconsFolder: "public",
    svgTest: /.svg$/
  }

  /**
   * Create instance of Sprite Bundler.
   * @param options{object}
   * @param options.iconsFolder{string}
   * @param options.filesMask{string}
   */
  constructor(options: SpriteBundlerConfig) {
    this.options = Object.assign({}, options);

    for (let key in SpriteBundler.defaultCfg) {
      if (this.options[key] === undefined) {
        this.options[key] = SpriteBundler.defaultCfg[key];
      }
    }
  }

  async bundle() {

    await fs.readdir(this.options.iconsFolder, (err?: (NodeJS.ErrnoException), files?: string[]) => {
      if (err) return console.log(err);
      const symbols = this.#extractSymbols(files.filter(file => this.options.svgTest.test(file)));
      const cssText = this.#generateCss(symbols);
      const svgText = this.#generateSvg(symbols);

      this.#updateCss(cssText);
      this.#updateSvg(svgText);
    })
  }

  #extractSymbols(files: string[]) {
    return files.map(file => {
      const id = file.replace(".svg", "");
      const text = fs.readFileSync(`${this.options.iconsFolder}/${file}`, "utf-8");

      return new Symbol(id, text);
    })
  }

  #generateCss(symbols: Symbol[]) {
    return `/* this file is generated with npm run sprite */\n` +
       symbols.map(({ id, width, height }) => `.${id} {\n  width: ${width}px;\n  height: ${height}px;\n}`).join('\n')
  }

  #generateSvg(symbols: Symbol[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n` +
       `<!-- this file is generated with npm run sprite -->\n` +
       `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve">\n` +
       symbols.map(({ html }) => html).join('') +
       `\n</svg>`
  }

  #updateSvg(text: string) {
    fs.writeFileSync(`${this.options.iconsFolder}/index.svg`, text);
  }

  #updateCss(text: string) {
    fs.writeFileSync(`${this.options.outputCss}/icons.css`, text);
  }
}

const cfg = {
  svgTest:  /icon-.+\.svg$/,
  iconsFolder: "./public/assets/icons",
  outputCss: "./src/app/style",
}

new SpriteBundler(cfg).bundle();
