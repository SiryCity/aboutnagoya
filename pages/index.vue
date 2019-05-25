<template lang="pug">
  div
    section#section
      heading
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
</template>

<script>
import Heading from '~/components/Heading'
import ArticleLink from '~/components/ArticleLink'
export default {
  components: {
    Heading,
    ArticleLink,
  },
}
</script>

<style lang="stylus" scoped>
#section
  width 70%
</style>
