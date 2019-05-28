<template lang="pug">
  nuxt-link.char-link(
    :to='to'
    :class='{"char-link--long": type === "long"}'
  ) {{char}}
</template>

<script>
export default {
  props: ['to', 'char', 'type']
}
</script>


<style lang="stylus" scoped>
.char-link
  color var(--c)
  text-decoration none
  height 40px
  line-height 32px
  padding 4px 6px
  box-shadow 0 3px 6px #bbb
  border-radius var(--r)
  border 1.5px var(--c) solid
  display inline-block
  box-sizing border-box
  text-align center
  margin var(--margin) 4px var(--margin) 0

.char-link--long
  width 100%
</style>
