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
  }
}
</script>

<style lang="stylus" scoped>
</style>
