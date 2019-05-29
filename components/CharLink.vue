<template lang="pug">
  nuxt-link.char-link(
    :to='makeURL(to)'
    :class=`{
      "char-link--long": type === "long",
      "char-link--short": type === "short",
    }`
  ) {{char}}
</template>

<script>
export default {
  props: ['to', 'char', 'type'],

  methods: {
    makeURL(str){
      const romanDistrict = {
        '南区': 'minami',
        '東区': 'higashi',
      }

      const code = str.charCodeAt(0)

      return ((code >= 0x4e00 && code <= 0x9fcf)
      || (code >= 0x3400 && code <= 0x4dbf)
      || (code >= 0x20000 && code <= 0x2a6df)
      || (code >= 0xf900 && code <= 0xfadf)
      || (code >= 0x2f800 && code <= 0x2fa1f))
        ? (romanDistrict[str] || str)
        : str
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
  box-shadow 0 3px 6px #bbb
  border-radius var(--r)
  border 1.5px var(--c) solid
  display inline-block
  box-sizing border-box
  text-align center
  margin var(--margin) 4px var(--margin) 0

.char-link--long
  width 100%
.char-link--short
  width 25%
</style>
