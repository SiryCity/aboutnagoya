<template lang="pug">
  page-wrapper
    section-wrapper(pos='center')
      title-box(title='サイトについて')
      div.about__body(v-html='about')
</template>

<script>
import PageWrapper from '~/components/PageWrapper'
import SectionWrapper from '~/components/SectionWrapper'
import TitleBox from '~/components/TitleBox'
import about from '~/assets/about.md'

export default {
  head:{
    title: 'サイトについて',
    type: 'website',
  },
  components: {
    PageWrapper,
    SectionWrapper,
    TitleBox,
  },
  computed:{
    about: () => about,
  },

  created(){
    this.$store.state.contentful.contents
    || this.$store.dispatch('contentful/fetchContents')
  }
}
</script>


<style lang="stylus" scoped>
.about__body
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
</style>
