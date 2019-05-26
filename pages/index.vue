<template lang="pug">
  div
    section-wrapper(percent=66.7)
      heading(title='最新の投稿')
      article-link(
        date='2019-01-01'
        subTitle='空白地帯'
        title='だいたい〇〇町'
        district='中区'
        :img='kari'
      )
    section-wrapper(percent=33.3)
      heading(title='区で調べる')
      heading(title='地図で調べる')
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import SectionWrapper from '~/components/SectionWrapper'
import Heading from '~/components/Heading'
import ArticleLink from '~/components/ArticleLink'
import kari from '~/assets/nagoya.svg'
export default {
  components: {
    SectionWrapper,
    Heading,
    ArticleLink,
  },
  computed: {
    kari: () => kari
  },

  async asyncData({env, payload}){
  console.dir(42)
  if(payload) return payload
  const contents = await createClient().getEntries({
    'content_type': env.CTF_BLOG_POST_TYPE_ID,
    order: '-fields.date',
  })

  console.dir(contents)
  /*
  return {
    posts: contents.items.map(item => 
      ({
        title: item.fields.title,
        date: item.fields.date,
        tags: item.fields.tags,
      })
    )
  }
  */

}
}
</script>

<style lang="stylus" scoped>
</style>
