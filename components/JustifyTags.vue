<template lang="pug">
  div.justify-tags: slot
</template>

<style lang="stylus" scoped>
.justify-tags
  width 100%
  height 140px
  margin-bottom 20px
  display flex
  flex-direction column
  flex-wrap wrap
  justify-content space-evenly
  align-items flex-end
</style>

