<template lang="pug">
  header#header
    nuxt-link#header__link(to='/')
      h1 aaa
      p 1111
</template>

<style lang="stylus" scoped>
#header
  width 100%
  height 180px
  #header__link
    width 100%
    height 100%
    display block
    color var(--bgc)
    background var(--c)
    text-decoration none
    display flex
    flex-direction column
    align-items center
</style>
