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
    head(){ 
      return {
        title: 'だいたいマップ',
        type: 'website',
        url: this.currentUrl,
      }
    },
  components:{
    PageWrapper,
    SectionWrapper,
    TitleBox,
    CharLink,
    JustifyTags
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
          date: item.fields.date.split('T')[0]
        })
      )
    }

  },

  mounted(){

      const L = require('leaflet')

      const ref = this.$refs['leaflet__wrapper']

      const center = L.latLng(
        this.$route.params.lat
          ? [this.$route.params.coords.lat, this.$route.params.coords.lon]
          : [35.153, 136.928]
      )

      const zoom = this.$route.params.lat
        ? 16
        : 12

      const map = L.map(ref, {center, zoom}).addLayer(
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')
      )

      this.posts.forEach((post, i) => {
        
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

  data: () =>
    ({
      currentUrl: null
    }),
  mounted(){
    this.currentUrl = location.href
  }

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