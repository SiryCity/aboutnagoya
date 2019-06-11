<template lang="pug">
  page-wrapper

    section-wrapper(pos='left')
      title-box(title='最新の投稿')
      article-link(
        v-for='(post, i) in $store.getters["contentful/indexPosts"]'
        :key='`post-${i}`'

        :date='post.date'
        :subTitle='post.subTitle'
        :title='post.title'
        :district='post.district'

        :img='kari'
      )

    section-wrapper(pos='right')
      title-box(title='区で調べる')
      char-link(
        v-for='(district, i) in Object.keys($store.getters["main/romanDistrict"])'
        :key='`district-${i}`'
        to='districts-district'
        :district='district'
        :char='district'
        type='short'
      )
      
      title-box(title='地図で調べる')
      char-link(
        to='map'
        char='だいたいマップ ▶'
        type='long'
      )

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import PageWrapper from '~/components/PageWrapper'
import SectionWrapper from '~/components/SectionWrapper'
import TitleBox from '~/components/TitleBox'
import ArticleLink from '~/components/ArticleLink'
import CharLink from '~/components/CharLink'

import Meta from '~/assets/mixins/meta.js'

import kari from '~/assets/nagoya.svg'
export default {
  mixins: [Meta],
  data: () => 
    ({
      meta: {
        title: '記事一覧',
        type: 'article',
        url: null,
      },
    }),
  components: {
    PageWrapper,
    SectionWrapper,
    TitleBox,
    ArticleLink,
    CharLink,
  },
  computed: {
    kari: () => kari
  },

}
</script>

<style lang="stylus" scoped>
</style>
