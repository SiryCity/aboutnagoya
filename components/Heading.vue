<template lang="pug">
  div.heading
    h2.heading__title {{title}}
</template>

<script>
export default {
  props:['title']
}
</script>


<style lang="stylus" scoped>
.heading
  width 100%
  height 90px
  margin 30px 0
  border-bottom 5px solid var(--gold)
  color var(--bgc)
  background var(--c)
  display flex
  flex-direction column
  flex-wrap wrap
  justify-content center
  align-content flex-start
  box-sizing border-box
  padding 5px
  

  &__title
    height 90px
    line-height 90px
    font-size 24px
    margin 0
    padding 0
    font-weight normal

</style>