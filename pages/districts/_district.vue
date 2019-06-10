<template lang="pug">
  page-wrapper

    section-wrapper(pos='left')
      title-box(:title='`${this.$store.getters["main/perthURL"](this.$route.params.district)}の投稿`')
      article-link(
        v-for='(post, i) in $store.getters["contentful/sameDistrictPosts"]($route.params.district)'
        :key='`post-closer-${i}`'

        :date='post.date'
        :subTitle='post.subTitle'
        :title='post.title'
        :district='post.district'

        :img='kari'
      )

    section-wrapper(pos='right')

      title-box(title='地図で調べる')
      char-link(
        to='map'
        char='だいたいマップ ▶'
        type='long'
      )
    
      title-box(title='最新の投稿')
      article-link(
        v-for='(post, i) in $store.getters["contentful/indexPosts"]'
        :key='`post-latest-${i}`'

        :date='post.date'
        :subTitle='post.subTitle'
        :title='post.title'
        :district='post.district'

        :img='kari'
      )

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import PageWrapper from '~/components/PageWrapper'
import SectionWrapper from '~/components/SectionWrapper'
import TitleBox from '~/components/TitleBox'
import ArticleLink from '~/components/ArticleLink'
import PrevNextLink from '~/components/PrevNextLink'
import CharLink from '~/components/CharLink'
import Meta from '~/assets/mixins/meta.js'

import kari from '~/assets/nagoya.svg'
export default {
  mixins: [Meta],
  data(){ 
    return {
      meta: {
        title: this.$store.getters['main/perthURL'](this.$route.params.district),
        type: 'article',
        url: this.currentUrl,
      },
      currentUrl: null
    }
  },
  components:{
    PageWrapper,
    SectionWrapper,
    TitleBox,
    ArticleLink,
    PrevNextLink,
    CharLink,
  },
  computed: {
    kari: () => kari
  },

  created(){
    this.$store.state.contentful.posts
    || this.$store.dispatch('contentful/fetchContents')
  },

}
</script>
