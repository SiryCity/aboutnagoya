<template lang="pug">
  nuxt-link.article-link(:to='{name:"posts-date", params:{date}}')
    img.article-link__img(:src='img')
    div.article-link__meta {{date}} {{district}}
    h3.article-link__title {{title}}
    h4.article-link__sub-title {{subTitle}}
</template>

<script>
export default {
  props: ['date', 'title', 'subTitle', 'district','img']
}
</script>


<style lang="stylus" scoped>
.article-link
  width 100%
  height 100px
  color var(--c)
  text-decoration none
  margin-bottom var(--margin)
  display flex
  flex-direction column
  flex-wrap wrap
  justify-content center
  align-content flex-start
  border-radius var(--r)
  box-shadow 0 3px 6px #bbb

  &__img
    width 90px
    height 90px
    margin 5px 3px
    
  &__meta
    height 15px
    font-size 14px
  &__title
    height 40px
    line-height 50px
    font-size 20px
    margin 0
    padding 0
    font-weight normal
  &__sub-title
    height 25px
    line-height 30px
    font-size 14px
    margin 0
    padding 0
    font-weight normal

</style>

