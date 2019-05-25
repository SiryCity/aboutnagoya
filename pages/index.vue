<template lang="pug">
  div
    heading
    article-link(
      title='title1'
      body='body1'
      img='img'
    )
    article-link(
      title='title1'
      body='body1'
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
