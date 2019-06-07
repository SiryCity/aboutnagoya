<template lang="pug">
  footer.footer(:class='{"footer--map": $route.path.includes("map")}')
    nav.footer__nav
      nuxt-link.footer__nav__link(:to='{"name": "index"}') ホーム
      nuxt-link.footer__nav__link(:to='{"name": "map"}') マップ
      nuxt-link.footer__nav__link(:to='{"name": "about"}') サイトについて
      nuxt-link.footer__nav__link(:to='{"name": "contact"}') お問い合わせ
    div.footer__copy &copy; 2019 だいたい名古屋
</template>

<style lang="stylus" scoped>
.footer
  width 100%
  color var(--bgc)
  background var(--c)
  text-align center
  border-top 3px solid var(--gold)
  box-sizing border-box

  &__nav
    width 100%
    display flex
    flex-wrap wrap
    justify-content center
      
    &__link
      height 30px
      line-height 30px
      padding 0 40px
      text-align center
      color var(--bgc)
      text-decoration none

  &__copy
    width 100%
    height 30px
    line-height 30px

.footer--map
  border-top 3px solid var(--blue)

@media screen and (max-width: 1079px)

  .footer__nav__link
    width 100%

</style>



