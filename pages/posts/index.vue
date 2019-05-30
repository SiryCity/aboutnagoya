<template lang="pug">
  page-wrapper

    section-wrapper(pos='left')
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

    section-wrapper(pos='right')
      title-box(title='区で調べる')
      char-link(
        v-for='(district, i) in Object.entries($store.getters["main/romanDistrict"])'
        :key='`district-${i}`'
        to='districts-district'
        :param='district[0]'
        :char='district[0]'
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

import kari from '~/assets/nagoya.svg'
export default {
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