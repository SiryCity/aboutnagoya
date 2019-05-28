<template lang="pug">
  div
    header-bar
    nuxt
    footer#footer &copy; 2019 だいたい名古屋

</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
export default {
  components: {
    HeaderBar
  },

}
</script>

<style lang="stylus">

:root
  --c #222
  --bgc #ddd
  --gold #cbf442

  --space 15px
  --r 3px
  --margin 30px

html
  font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  background var(--bgc)
  color var(--c)
*
*before
*after
  box-sizing border-box
  margin 0

body
  margin 0

  #footer
    width 100%
    height 30px
    line-height 28.5px
    color var(--bgc)
    background var(--c)
    text-align center
    border-top 3px solid var(--gold)
    box-sizing border-box
    

</style>
