<template lang="pug">
  nuxt-link.article-link(to='/')
    h3.article-link__title {{title}}
    p.article-link__body {{body}}
    img.article-link__img(src='~/assets/nagoya.svg')
</template>

<script>
export default {
  props: ['title', 'body','img']
}
</script>


<style lang="stylus" scoped>
.article-link
  width 100%
  color var(--c)
  text-decoration none
  border-bottom 2px var(--c) solid
  margin-bottom 50px
  display flex
  flex-direction column
  align-items center

  &__title
    width 95%
    height 26px
    font-size 20px
    margin 0
    padding 0
  &__body
    width 95%
    height 26px
    margin 5px 0 -20px
    padding 0
    word-wrap break-word
  &__img
    width 64px
    height 64px
    align-self flex-end
</style>

