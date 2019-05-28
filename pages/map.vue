<template lang="pug">
  page-wrapper
    title-box(title='地図で調べる')
    div.leaflet__wrapper
      no-ssr
        l-map.mini-map(:zoom='16' :center='[35.0742236, 136.910764]')
          l-tile-layer(url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png')
        
</template>


<script>
import PageWrapper from '~/components/PageWrapper'
import TitleBox from '~/components/TitleBox'
export default {
  components:{
    PageWrapper,
    TitleBox,
  }
}
</script>


<style lang="stylus">
.leaflet__wrapper
  width 100%
  height 400px
  box-sizing border-box
  border 2px solid var(--gold)

</style>