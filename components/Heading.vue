<template lang="pug">
  div.heading
    img.heading__img(src='~/assets/nagoya-white.svg')
    h2.heading__title sss
</template>



<style lang="stylus" scoped>
.heading
  width 95%
  padding 10px 2.5%
  color var(--bgc)
  background var(--c)
  margin-bottom 50px
  display flex
  justify-content space-evenly
  border-bottom 3px var(--green) solid
  box-shadow 0 5px 0 0 var(--c)
  
  &__img
    width 64px
    height 64px

  &__title
    width calc(100% - 64px - 2.5%)
    margin 0
    padding 0
    font-size 20px
    font-weight normal

</style>