---
title: "{{theme.t.recentPosts}}"
layout: util
head:
  - - meta
    - name: robots
      content: noindex
---

<script setup>
import RecentList from 'vitepress-sls-blog-tmpl/RecentList.vue'
import { useData } from 'vitepress'

const { params } = useData()
</script>

<RecentList
  :curPage="params.page"
/>
