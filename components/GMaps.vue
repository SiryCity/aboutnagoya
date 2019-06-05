<template lang="pug">
  a.g-maps(
    :href='to'
  ) {{char}}
</template>

<script>
export default {
  props: ['to', 'char', 'coords', 'blue'],
}
</script>


<style lang="stylus" scoped>
.g-maps
  color var(--b)
  text-decoration none
  height 32px
  line-height 24px
  padding 4px 6px
  box-shadow 0 2px 4px #bbb
  border-radius var(--r)
  background #4788f4
  display inline-block
  box-sizing border-box
  text-align center

</style>
