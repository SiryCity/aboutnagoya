<template lang="pug">
  main.page-wrapper
    slot
</template>


<style lang="stylus" scoped>
.page-wrapper
  width 1080px
  max-width calc(100% - var(--space))
  margin 40px auto
  display flex
  flex-wrap wrap
  align-items flex-start
</style>
