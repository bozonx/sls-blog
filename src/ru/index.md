---
layout: home
---

<script setup>
import HomeHero from 'vitepress-sls-blog-tmpl/HomeHero.vue'
import HomeTags from 'vitepress-sls-blog-tmpl/HomePageTags.vue'
import HomePopularPosts from 'vitepress-sls-blog-tmpl/HomePagePopularPosts.vue'
import UtilPageContent from 'vitepress-sls-blog-tmpl/UtilPageContent.vue'
import { useData } from 'vitepress'

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
    {
      text: "Youtube канал",
      href: theme.value.ruYoutubeChannel,
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
<HomeTags :header="theme.t.tags" />
<HomePopularPosts />

<!-- <UtilPageContent> -->
<!---->
<!-- ## header -->
<!---->
<!-- other text -->
<!---->
<!-- </UtilPageContent> -->
