---
layout: home
---

<script setup>
import HomePageTags from 'vitepress-sls-blog-tmpl/HomePageTags.vue'
import HomeHero from 'vitepress-sls-blog-tmpl/HomeHero.vue'
import HomePagePopularPosts from 'vitepress-sls-blog-tmpl/HomePagePopularPosts.vue'
import UtilPageContent from 'vitepress-sls-blog-tmpl/UtilPageContent.vue'
import { useData } from 'vitepress'
import { data } from './loadPosts.data.js'

const { theme, localeIndex } = useData()

const hero = {
  firstLine: "Блог Системы Личной Свободы",
  secondLine: "Статьи, тексты&nbsp;подкастов",
  img: theme.value.mainHeroImg,
  buttons: [
    {
      text: theme.value.t.toBlog,
      href: `${theme.value.recentBaseUrl}/1`,
      primary: true,
    },
    // {
    //   text: theme.value.t.links.wiki,
    //   href: `${theme.value.siteUrl}/${localeIndex.value}/${theme.value.docUrl}`,
    //   icon: theme.value.docIcon,
    // },
    {
      text: "Youtube канал",
      href: "https://www.youtube.com/@slsfreedom",
      icon: theme.value.youtubeIcon,
    },
    {
      text: theme.value.t.links.donate,
      href: `${theme.value.donate.url}`,
      icon: theme.value.donateIcon,
    },
  ],
}
</script>

<HomeHero v-bind="hero" />
<HomePageTags :header="theme.t.tags" :allPosts="data.posts" />
<HomePagePopularPosts />

<!-- <UtilPageContent> -->
<!---->
<!-- ## header -->
<!---->
<!-- other text -->
<!---->
<!-- </UtilPageContent> -->
