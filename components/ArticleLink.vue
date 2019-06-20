<template lang="pug">
  nuxt-link.article-link(:to='{name:"posts-date", params:{date}}')
    img.article-link__img(:src='img')
    div.article-link__right
      div.article-link__right__district {{date}} {{district}}
      h3.article-link__right__title {{title}}
      h4.article-link__right__sub-title - {{subTitle}}
</template>

<script>
export default {
  props: ['date', 'title', 'subTitle', 'district','img']
}
</script>


<style lang="stylus" scoped>
.article-link
  width 100%
  min-height 100px
  padding 10px 0
  color var(--c)
  text-decoration none
  margin-bottom var(--margin)
  display flex
  align-items center
  border-radius var(--r)
  box-shadow 0 3px 6px #bbb

  &__img
    width 90px
    height 90px
    margin 5px 3px
    
  &__right
    width calc(100% - 90px - 6px)
    display flex
    flex-direction column
    justify-content center
    &__district
      font-size 14px
    &__title
      font-size 20px
      height 50px
      line-height 50px
      margin 5px 0
      padding 0
      font-weight normal
    &__sub-title
      font-size 14px
      margin 0
      padding 0
      font-weight normal

</style>

