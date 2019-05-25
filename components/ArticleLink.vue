<template lang="pug">
  nuxt-link.article-link(to='/')
    //img.article-link__img(src='~/assets/nagoya.svg')
    h3.article-link__title {{title}}
    div.article-link__district {{district}}
</template>

<script>
export default {
  props: ['title', 'district','img']
}
</script>


<style lang="stylus" scoped>
.article-link
  width 100%
  height 120px
  color var(--c)
  text-decoration none
  margin 30px 0
  display flex
  flex-direction column
  flex-wrap wrap
  justify-content center
  align-content flex-start
  border-radius 3px
  box-shadow 0 3px 6px #bbb

  &__title
    height 60px
    line-height 86px
    font-size 20px
    margin 0
    padding 0
    font-weight normal
  &__district
    height 40px
    font-size 14px

</style>

