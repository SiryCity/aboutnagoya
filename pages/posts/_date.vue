<template lang="pug">
  page-wrapper

    section-wrapper(pos='left')
      title-box(
        :title='nearbyPosts.curr.title'
        :subTitle='nearbyPosts.curr.subTitle'
      )

      right-justify: p {{nearbyPosts.curr.date}}
      
      right-justify: char-link(
        to='districts-district'
        :district='nearbyPosts.curr.district'
        :char='nearbyPosts.curr.district'
        type='shrink'
      )

      hr
      
      div(v-html='$md.render(nearbyPosts.curr.body)')

      hr

      right-justify
        char-link(
          to='map'
          char='だいたいマップで見る'
          type='shrink'
          :coords='nearbyPosts.curr.coords'
        )

      
      char-link(
        to='index'
        char='◀ home'
        type='shrink'
      )
      
      prev-next-link(
        v-if='nearbyPosts.prev'
        type='prev'

        :date='nearbyPosts.prev.date'
        :subTitle='nearbyPosts.prev.subTitle'
        :title='nearbyPosts.prev.title'
        :district='nearbyPosts.prev.district'

        :img='kari'
      )

      prev-next-link(
        v-if='nearbyPosts.next'
        type='next'

        :date='nearbyPosts.next.date'
        :subTitle='nearbyPosts.next.subTitle'
        :title='nearbyPosts.next.title'
        :district='nearbyPosts.next.district'

        :img='kari'
      )
      

    section-wrapper(pos='right')

      title-box(:title='`${nearbyPosts.curr.district}の投稿`')
      article-link(
        v-for='(post, i) in nearbyPosts.closer'
        :key='`post-closer-${i}`'

        :date='post.date'
        :subTitle='post.subTitle'
        :title='post.title'
        :district='post.district'

        :img='kari'
      )

      title-box(title='最新の投稿')
      article-link(
        v-for='(post, i) in nearbyPosts.latest'
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
import RightJustify from '~/components/RightJustify'

import kari from '~/assets/nagoya.svg'
export default {
  components:{
    PageWrapper,
    SectionWrapper,
    TitleBox,
    ArticleLink,
    PrevNextLink,
    CharLink,
    RightJustify
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
          
          body: item.fields.body,
          coords: item.fields.coords,
        })
      )
    }

  },

  computed:{
    nearbyPosts(){
      return this.posts.reduce((prev, curr, i, posts) =>
        prev
        || curr.date !== this.$route.params.date
          ? prev
          : {
            next: posts[i - 1] || null,
            curr,
            prev: posts[i + 1] || null,

            closer: posts.filter(post =>
              post.district === curr.district
              && post.title !== curr.title
            ),

            latest: posts.filter((post, j) =>
              j <= 2
            ),
          }
      , null)
    },

    kari: () => kari
  }
}
</script>
