<template lang="pug">
  page-wrapper

    section-wrapper(pos='left')
      title-box(:title='`${$route.params.district}の投稿`')


      

    section-wrapper(pos='right')

      title-box(title='地図で調べる')
      char-link(
        to='map'
        char='だいたいマップ ▶'
        type='long'
      )

      title-box(title='最新の投稿')

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
        post.district.includes(this.$route.params.district))
    },
  }
}
</script>
