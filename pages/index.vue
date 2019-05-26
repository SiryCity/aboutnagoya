<template lang="pug">
  div
    section-wrapper(percent=66.7)
      heading(title='最新の投稿')
      article-link(
        title='ああああああああああああああ'
        district='中区'
        img='img'
      )
      article-link(
        title='ああああああああああああああ'
        district='中区'
        img='img'
      )
      article-link(
        title='ああああああああああああああ'
        district='中区'
        img='img'
      )
    section-wrapper(percent=33.3)
      heading(title='区で調べる')
      heading(title='地図で調べる')
</template>

<script>
import SectionWrapper from '~/components/SectionWrapper'
import Heading from '~/components/Heading'
import ArticleLink from '~/components/ArticleLink'
export default {
  components: {
    SectionWrapper,
    Heading,
    ArticleLink,
  },
}
</script>

<style lang="stylus" scoped>
</style>
