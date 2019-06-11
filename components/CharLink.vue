<template lang="pug">
  nuxt-link.char-link(
    :to=`{
      name: $store.getters['main/makeURL'](to),
      params: {
        district: district
          ? $store.getters['main/makeURL'](district)
          : null,

        coords: coords || null

      }
    }`

    :class='`char-link--${type}`'
    :style='{"background": blue ? "#aeaded": "unset"}'
  ) {{char}}
</template>

<script>
export default {
  props: ['to', 'char', 'type', 'district', 'coords', 'blue'],
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
.char-link--short
  width 23%
.char-link--shrink
  width auto

</style>
