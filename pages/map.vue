<template lang="pug">
  page-wrapper
    section-wrapper(pos='center')
      title-box(title='だいたいマップ')
      char-link(
        to='index'
        char='◀ home'
        type='shrink'
      )


      div.leaflet__wrapper
        no-ssr
          l-map.mini-map(
            :zoom=`
              $route.params.coords
                ? 18
                : 12
            `
            :center=`[
              $route.params.coords
                ? $route.params.coords.lat
                : 35.153,
              $route.params.coords
                ? $route.params.coords.lon
                : 136.928,
            ]`
          )
            l-tile-layer(url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')

</template>


<script>
import PageWrapper from '~/components/PageWrapper'
import SectionWrapper from '~/components/SectionWrapper'
import TitleBox from '~/components/TitleBox'
import CharLink from '~/components/CharLink'
export default {
  components:{
    PageWrapper,
    SectionWrapper,
    TitleBox,
    CharLink,
  }
}
</script>


<style lang="stylus">
.leaflet__wrapper
  width 100%
  height 100vh
  box-sizing border-box
  border 2px solid var(--gold)

</style>