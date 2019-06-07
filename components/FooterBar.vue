<template lang="pug">
  footer.footer(:class='{"footer--map": $route.path.includes("map")}')
    nav.footer__nav
      //- nuxt-link.footer__nav__link(to='map') マップ
    div.footer__copy &copy; 2019 だいたい名古屋
</template>

<style lang="stylus" scoped>
.footer
  width 100%
  height 60px
  color var(--bgc)
  background var(--c)
  text-align center
  border-top 3px solid var(--gold)
  box-sizing border-box


  &__nav
    width 100%
    height 30px
    display flex
    flex-wrap wrap
    justify-content center

    &__link
      color var(--bgc)
      text-decoration none
      
  &__copy
    width 100%
    height 30px
    line-height 30px

.footer--map
  border-top 3px solid var(--blue)
</style>



