<template lang="pug">
  div.heading
    h2.heading__title {{title}}
    h3.heading__sub-title(v-if='subTitle') - {{subTitle}}
</template>

<script>
export default {
  props:['title', 'subTitle']
}
</script>


<style lang="stylus" scoped>
.heading
  width 100%
  height 90px
  margin-bottom var(--margin)
  border-bottom 5px solid var(--gold)
  color var(--bgc)
  background var(--c)
  display flex
  box-sizing border-box
  padding 5px
  

  &__title
    height 90px
    line-height 75px
    font-size 24px
    margin 0
    padding 0
    font-weight normal

  &__sub-title
    height 90px
    line-height 80px
    font-size 16px
    margin 0 0 0 10px
    padding 0
    font-weight normal

</style>