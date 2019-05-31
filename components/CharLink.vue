<template lang="pug">
  nuxt-link.char-link(
    :to=`{
      name: makeURL(to),
      params: {
        district: district
          ? makeURL(district)
          : null,

        coords: null

      }
    }`

    :class='`char-link--${type}`'
  ) {{char}}
</template>

<script>
export default {
  props: ['to', 'char', 'type', 'district', 'coords'],

  methods: {
    makeURL(district){

      const code = district.charCodeAt(0)

      return ((code >= 0x4e00 && code <= 0x9fcf)
      || (code >= 0x3400 && code <= 0x4dbf)
      || (code >= 0x20000 && code <= 0x2a6df)
      || (code >= 0xf900 && code <= 0xfadf)
      || (code >= 0x2f800 && code <= 0x2fa1f))
        ? this.$store.getters['main/romanDistrict'][district]
        : district
    },
  }
}
</script>


<style lang="stylus" scoped>
.char-link
  color var(--c)
  text-decoration none
  height 32px
  line-height 24px
  padding 4px 6px
  box-shadow 0 2px 4px #bbb
  border-radius var(--r)
  border 1.5px var(--c) solid
  display inline-block
  box-sizing border-box
  text-align center

.char-link--long
  width 100%
  margin var(--margin) 4px var(--margin) 0
.char-link--short
  width 23%
  margin 4px 1%
.char-link--shrink
  margin var(--margin) 4px var(--margin) 0
</style>
