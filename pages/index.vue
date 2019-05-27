<template lang="pug">
  div
    section-wrapper(percent=70)
      title-box(title='最新の投稿')
      article-link(
        v-for='(post, i) in posts'
        :key='`post-${i}`'

        :date='post.date'
        :subTitle='post.subTitle'
        :title='post.title'
        :district='post.district'

        :img='kari'
      )

    section-wrapper(percent=30)
      title-box(title='区で調べる')
      title-box(title='地図で調べる')
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import SectionWrapper from '~/components/SectionWrapper'
import TitleBox from '~/components/TitleBox'
import ArticleLink from '~/components/ArticleLink'
import kari from '~/assets/nagoya.svg'
export default {
  components: {
    SectionWrapper,
    TitleBox,
    ArticleLink,
  },
  computed: {
    kari: () => kari
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

  }
  
}
</script>

<style lang="stylus" scoped>
</style>
