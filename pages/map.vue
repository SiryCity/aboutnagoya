<template lang="pug">
  page-wrapper
    section-wrapper(pos='center')
      title-box(title='だいたいマップ')
      char-link(
        to='index'
        char='◀ home'
        type='shrink'
      )

      div.leaflet__wrapper(ref='leaflet__wrapper')

      //-
        no-ssr
          l-map.mini-map(
            :zoom=`
              $route.params.coords
                ? 16
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

            l-circle(
              v-for='(post, i) in posts'
              :key='`map-post-${i}`'
              :lat-lng='[post.coords.lat, post.coords.lon]'

              :radius='300'
              color='#666'
              fillColor='#cbf442'
            )

</template>


<script>
import {createClient} from '~/plugins/contentful.js'
import PageWrapper from '~/components/PageWrapper'
import SectionWrapper from '~/components/SectionWrapper'
import TitleBox from '~/components/TitleBox'
import CharLink from '~/components/CharLink'
import "leaflet/dist/leaflet.css"

export default {
  components:{
    PageWrapper,
    SectionWrapper,
    TitleBox,
    CharLink,
  },


  async asyncData({env, payload}){
    if(payload) return payload
    const contents = await createClient().getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.date',
    })

    return {
      posts: contents.items.map(item => 
        ({
          title: item.fields.title,
          coords: item.fields.coords,
        })
      )
    }

  },

  mounted(){

      const L = require('leaflet')

      const latLng = this.$route.params.lat
        ? [this.$route.params.coords.lat, this.$route.params.coords.lon]
        : [35.153, 136.928]

      const zoom = this.$route.params.lat
        ? 16
        : 12
        
      const ref = this.$refs['leaflet__wrapper']

      console.dir(this.posts)

      const map = L.map(ref, {center: L.latLng(latLng), zoom}).addLayer(
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')
      )
      
  },


}

</script>


<style lang="stylus">
.leaflet__wrapper
  width 100%
  height 100vh
  box-sizing border-box
  border 2px solid var(--gold)


</style>