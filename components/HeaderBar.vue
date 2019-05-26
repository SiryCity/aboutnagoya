<template lang="pug">
  header#header
    nuxt-link#header__link(to='/')
      h1 だいたい名古屋
      p 名古屋のだいたいのイメージを発信。
</template>

<style lang="stylus" scoped>
#header
  width 100%
  height 180px
  border-bottom 5px solid var(--gold)
  #header__link
    width 100%
    height 100%
    color var(--bgc)
    background var(--c)
    text-decoration none
    display flex
    flex-direction column
    align-items center
    h1
      padding 0
      margin 40px 0 10px
    p
      padding 0
      margin 0
</style>
