<template lang="pug">
  nuxt-link.prev-next-link__wrapper(:to='{name:"posts-date", params:{date}}')
    div.prev-next-link__caption {{type === 'prev' ? '前の記事' : '次の記事'}}
    div.prev-next-link
      img.prev-next-link__img(:src='img')
      div.prev-next-link__right
        div.prev-next-link__right__district {{date}} {{district}}
        h3.prev-next-link__right__title {{title}}
        h4.prev-next-link__right__sub-title {{subTitle}}
</template>

<script>
export default {
  props: ['type', 'date', 'title', 'subTitle', 'district','img']
}
</script>


<style lang="stylus" scoped>

.prev-next-link__wrapper
  width 100%
  min-height 130px
  color var(--c)
  text-decoration none
  border-radius 3px
  margin-bottom var(--margin)
  display flex
  flex-wrap wrap
  box-shadow 0 3px 6px #bbb

  .prev-next-link__caption
    width 100%
    height 30px
    line-height 30px
    color var(--bgc)
    background var(--c)
    text-align center
    box-sizing border-box
    border-bottom 4px solid var(--gold)
  .prev-next-link
    width 100%
    min-height 100px
    padding 10px 0
    display flex
    align-items center

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

