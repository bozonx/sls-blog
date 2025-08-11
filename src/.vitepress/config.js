import { defineConfig } from "vitepress";
import blogConfigBase from "vitepress-sls-blog-tmpl/blogConfigBase.js";
import { loadBlogLocale } from "vitepress-sls-blog-tmpl/blogConfigHelper.js";
import { PROPS } from "./props.js";

const ru = loadBlogLocale("ru", __filename, PROPS);
const en = loadBlogLocale("en", __filename, PROPS);
const configBase = blogConfigBase(PROPS, en);

export default defineConfig({
  ...configBase,
  locales: {
    ...configBase.locales,
    en: { lang: "en-US", ...en },
    ru: { lang: "ru-RU", ...ru },
  },
  themeConfig: {
    ...configBase.themeConfig,
    showAuthorInPostList: false,
    homeBgParalaxOffset: 150,
    sidebarLogoSrc: "/img/sidebar-logo.webp",
  },
  head: [
    ...configBase.head,
    // do not recognize telephone numbers on the page
    ["meta", { name: "format-detection", content: "telephone=no" }],

    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-B9R514ZW75",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
       gtag('config', 'G-B9R514ZW75');`,
    ],
  ],
});
