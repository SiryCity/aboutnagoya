<template lang="pug">
  page-wrapper
    section-wrapper(pos='center')
      title-box(title='だいたいマップ')
      char-link(
        to='/'
        char='◀ home'
        type='shrink'
      )

      div.leaflet__wrapper
        no-ssr
          l-map.mini-map(:zoom='12' :center='[35.153, 136.928]')
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