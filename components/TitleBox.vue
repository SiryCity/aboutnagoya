<template lang="pug">
  div.heading(:class='{"heading--map": blue}')
    h2.heading__title {{title}}
    h3.heading__sub-title(v-if='subTitle') - {{subTitle}}
</template>

<script>
export default {
  props:['title', 'subTitle', 'blue']
}
</script>


<style lang="stylus" scoped>
.heading
  width 100%
  min-height 90px
  margin-bottom var(--margin)
  border-bottom 5px solid var(--gold)
  color var(--bgc)
  background var(--c)
  display flex
  align-items center
  flex-wrap wrap
  box-sizing border-box
  padding 5px
  

  &__title
    margin 30px 0
    padding 0
    font-weight normal

  &__sub-title
    margin 10px 0 0 10px
    padding 0
    font-weight normal
    font-size 16px

.heading--map
  border-bottom 5px solid var(--blue)
</style>