<template lang="pug">
  page-wrapper
    section-wrapper(pos='left')
      title-box(
        :title='posts && posts.curr.title'
        :subTitle='posts && posts.curr.subTitle'
      )
      s-n-s-box
      justify-tags
        p {{posts && posts.curr.date}}
        char-link(
          :to='posts && "districts-district"'
          :district='posts && posts.curr.district'
          :char='posts && posts.curr.district'
          type='shrink'
        )
      hr

      h2.posts_default-tag 概要
      div.posts__body
        p {{posts ? posts.curr.bodyAbout : ""}}
      h2.posts_default-tag 地理
      div.posts__body(v-html='$md.render(posts ? posts.curr.bodyGeography : "")')
      h2.posts_default-tag 人
      div.posts__body(v-html='$md.render(posts ? posts.curr.bodyPeople : "")')
      h2.posts_default-tag 結論
      div.posts__body
        p {{posts ? posts.curr.bodyConclusion : ""}}

      hr

      justify-tags

        char-link(
          to='map'
          char='だいたいマップで見る'
          type='shrink'
          :coords='posts && posts.curr.coords'
          :blue='true'
        )

        g-maps(
          :to='`https://www.google.co.jp/maps/@${posts && posts.curr.coords.lat},${posts && posts.curr.coords.lon},15z`'
          char='Google Mapsで見る'
          type='shrink'
          :coords='posts && posts.curr.coords'
          :blue='true'
        )

        char-link(
          to='index'
          char='◀ home'
          type='shrink'
        )

      prev-next-link(
        v-if='posts && posts.prev'
        type='prev'

        :date='posts && posts.prev.date'
        :subTitle='posts && posts.prev.subTitle'
        :title='posts && posts.prev.title'
        :district='posts && posts.prev.district'

        :img='kari'
      )

      prev-next-link(
        v-if='posts && posts.next'
        type='next'

        :date='posts && posts.next.date'
        :subTitle='posts && posts.next.subTitle'
        :title='posts && posts.next.title'
        :district='posts && posts.next.district'

        :img='kari'
      )
      

    section-wrapper(pos='right')

      title-box(:title='`${posts && posts.curr.district}の投稿`')
      article-link(
        v-for='(post, i) in posts && posts.closer'
        :key='`post-closer-${i}`'

        :date='post.date'
        :subTitle='post.subTitle'
        :title='post.title'
        :district='post.district'

        :img='kari'
      )

      title-box(title='最新の投稿')
      article-link(
        v-for='(post, i) in posts && posts.latest'
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
import GMaps from '~/components/GMaps'
import JustifyTags from '~/components/JustifyTags'
import SNSBox from '~/components/SNSBox.vue'

import kari from '~/assets/nagoya.svg'
export default {
  head(){
    return {
      title: (this.posts && this.posts.curr.title.replace('だいたい', '')),
      type: 'article',
      meta: [
        {hid: 'og:title', property: 'og:title', content: `だいたい${this.posts && this.posts.curr.title.replace('だいたい', '')} | だいたい名古屋`},
      ]
    }
  },
  components:{
    PageWrapper,
    SectionWrapper,
    TitleBox,
    ArticleLink,
    PrevNextLink,
    CharLink,
    GMaps,
    JustifyTags,
    SNSBox,
  },
  
  computed: {
    kari: () => kari,
    posts(){
      return this.$store.getters["contentful/nearbyPosts"](this.$route.params.date)
    }
  },

}
</script>

<style lang="stylus" scoped>
.posts__body
  width 100%
  line-height 1.8
  >>> a
    color var(--c)
    text-decoration none
    &:hover
      text-decoration underline
  >>> h2
    font-size 22px
    margin 50px 0 20px 10px
    border-left 3px solid var(--gold)
    padding-left 10px
    box-sizing border-box
    box-shadow -8px 0 0 0 var(--c)
    
  >>> h3
    font-size 18px
    margin 20px 0 10px
    border-left 3px solid var(--c)
    padding-left 5px
    box-sizing border-box
  >>> pre
    margin 20px 0 30px
    code
      overflow scroll
  >>> ol
    margin 50px 0

.posts_default-tag
  font-size 22px
  margin 50px 0 20px 10px
  border-left 3px solid var(--gold)
  padding-left 10px
  box-sizing border-box
  box-shadow -8px 0 0 0 var(--c)
</style>
