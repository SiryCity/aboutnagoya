<template lang="pug">
  header.header(:class='{"header--map": $route.path.includes("map")}')
    nuxt-link.header__link(to='/')
      h1 だいたい名古屋
      p 生粋の名古屋人が名古屋の「だいたい」を発信。
</template>

<style lang="stylus" scoped>
.header
  width 100%
  height 180px
  border-bottom 5px solid var(--gold)
  box-sizing border-box
  &__link
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

.header--map
  border-bottom 5px solid var(--blue)
</style>
