<template lang="pug">
  page-wrapper

    section-wrapper(pos='left')
      title-box(:title='`${perthURL($route.params.district)}の投稿`')
      article-link(
        v-for='(post, i) in sameDistrictPosts'
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
        v-for='(post, i) in posts'
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

import kari from '~/assets/nagoya.svg'
export default {
  components:{
    PageWrapper,
    SectionWrapper,
    TitleBox,
    ArticleLink,
    PrevNextLink,
    CharLink,
  },

  methods: {
    makeURL(district){

      const code = district.charCodeAt(0)

      return ((code >= 0x4e00 && code <= 0x9fcf)
      || (code >= 0x3400 && code <= 0x4dbf)
      || (code >= 0x20000 && code <= 0x2a6df)
      || (code >= 0xf900 && code <= 0xfadf)
      || (code >= 0x2f800 && code <= 0x2fa1f))
        ? this.$store.getters['main/romanDistrict'][district]
        : district
    },

    perthURL(URL){
      return Object.entries(this.$store.getters['main/romanDistrict']).find(district =>
        district[1] === URL
      )[0]
    },
  },

  async asyncData({env, payload}){
    if(payload) return payload
    const contents = await createClient().getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.date',
    })

    return {
      posts: contents.items.map(item => 
        ({
          title: item.fields.title,
          subTitle: item.fields.subTitle,
          date: item.fields.date.split('T')[0],
          district: item.fields.district,
        })
      )
    }

  },

  computed:{
    kari: () => kari,

    sameDistrictPosts(){
      return this.posts.filter(post =>
        this.makeURL(post.district) === this.$route.params.district)
    },
  }
}
</script>
