<template lang="pug">
  section.section(:style='{"width": `calc(${percent}% - var(--space))`}')
    slot
</template>

<script>
export default {
  props: ['percent']
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

//.section--left
</style>
