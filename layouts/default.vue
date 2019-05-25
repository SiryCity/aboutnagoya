<template lang="pug">
  div
    header-bar
    main#root
      nuxt
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
export default {
  components: {
    HeaderBar

  }
}
</script>

<style lang="stylus">

:root
  --c #111
  --bgc #eee
  --bggreen #ddd
  --green #30a358

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

#root
  width 1080px
  max-width 95%
  margin 40px auto
</style>
