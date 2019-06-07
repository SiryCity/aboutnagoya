<template lang="pug">
  page-wrapper
    section-wrapper(pos='center')
      title-box(title='サイトについて')
</template>

<script>
import PageWrapper from '~/components/PageWrapper'
import SectionWrapper from '~/components/SectionWrapper'
import TitleBox from '~/components/TitleBox'

export default {
  head:{
    title: 'サイトについて',
    type: 'website',
  },
  components: {
    PageWrapper,
    SectionWrapper,
    TitleBox,
  },
}
</script>