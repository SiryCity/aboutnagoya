<template lang="pug">
  section.section(:class='`section--${pos}`')
    slot
</template>

<script>
export default {
  props: ['pos']
}
</script>


<style lang="stylus" scoped>
.section
  margin calc(var(--space) / 2)
  padding var(--space)
  box-sizing border-box
  display inline-block
  background #e6e6e6
  border-radius var(--r)

.section--left
  width calc(70% - var(--space))
.section--right
  width calc(30% - var(--space))
.section--center
  width calc(100% - var(--space))

@media screen and (max-width: 1079px)
  .section--left
  .section--right
    width calc(100% - var(--space))


</style>
