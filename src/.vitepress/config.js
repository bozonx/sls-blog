import { defineConfig } from "vitepress";
import { mergeBlogConfig } from "vitepress-sls-blog-tmpl/blogConfigBase.js";
import { loadBlogLocale } from "vitepress-sls-blog-tmpl/blogConfigHelper.js";

export const PER_PAGE = 20;

export default async () => {
  const config = defineConfig({
    hostname: "https://blog.p-libereco.org",
    themeConfig: {
      repo: "https://github.com/bozonx/sls-blog",
      siteUrl: "https://p-libereco.org",
      perPage: PER_PAGE,
      sidebarLogoSrc: "/img/sidebar-logo.webp",
      homeBgParalaxOffset: 150,
    },
    head: [
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

  return mergeBlogConfig({
    ...config,
    locales: {
      en: await loadBlogLocale("en", __filename, config),
      ru: await loadBlogLocale("ru", __filename, config),
    },
  });
};
