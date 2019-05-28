<template lang="pug">
  page-wrapper
    section-wrapper(pos='left')
      title-box(:title='nearbyPosts.curr.title')
      p {{nearbyPosts.curr.subTitle}}
      p {{nearbyPosts.curr.date}}
      p {{nearbyPosts.curr.district}}
      div(v-html='$md.render(nearbyPosts.curr.body)')
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
import kari from '~/assets/nagoya.svg'
export default {
  components:{
    PageWrapper,
    SectionWrapper,
    TitleBox,
    ArticleLink,
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
