<template lang="pug">
  page-wrapper
    section-wrapper(pos='center')
      title-box(title='だいたいマップ' :blue='true')
      div.leaflet__wrapper(ref='leaflet__wrapper')
      justify-tags
        char-link(
          to='index'
          char='◀ home'
          type='shrink'
        )

</template>


<script>
import {createClient} from '~/plugins/contentful.js'
import PageWrapper from '~/components/PageWrapper'
import SectionWrapper from '~/components/SectionWrapper'
import TitleBox from '~/components/TitleBox'
import CharLink from '~/components/CharLink'
import JustifyTags from '~/components/JustifyTags'

export default {
  head: () =>
    ({
      title: 'だいたいマップ',
      type: 'website',
      meta: [
        {hid: 'og:title', property: 'og:title', content: 'だいたいマップ'},
      ]
    }),
  components:{
    PageWrapper,
    SectionWrapper,
    TitleBox,
    CharLink,
    JustifyTags
  },


  mounted(){

      const L = require('leaflet')

      const ref = this.$refs['leaflet__wrapper']

      const center = L.latLng(
        this.$route.params.coords
          ? [this.$route.params.coords.lat, this.$route.params.coords.lon]
          : [35.153, 136.928]
      )

      const zoom = this.$route.params.coords
        ? 16
        : 12

      const map = L.map(ref, {center, zoom}).addLayer(
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')
      )

      this.$store.getters['contentful/datePosts'].forEach((post, i) => {
        
        const coords = [post.coords.lat, post.coords.lon]
        const icon = L.divIcon({
          html: post.title.replace('だいたい', ''),
          className: 'div-icon',
          iconSize: [160, 16]
        })

        L.marker(
          coords,
          {icon},
        ).addTo(map)

        L.circle(
          coords,
          200,
          {
            color: '#4341f4',
            fillColor: '#666',
            className: `circle-${i}`,
          }
        ).addTo(map)


        document.querySelector(`.circle-${i}`).addEventListener('click', () =>{
          this.$router.push({name: 'posts-date', params: {date: post.date}})
        })

      })
  },
}

</script>


<style lang="stylus">
.leaflet__wrapper
  width 100%
  height 100vh
  box-sizing border-box
  border 2px solid var(--blue)

.div-icon
  color var(--c)
  text-align center
  pointer-events none !important

</style>