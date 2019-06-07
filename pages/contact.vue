<template lang="pug">
  page-wrapper
    section-wrapper(pos='center')
      title-box(title='お問い合わせ')
</template>

<script>
import PageWrapper from '~/components/PageWrapper'
import SectionWrapper from '~/components/SectionWrapper'
import TitleBox from '~/components/TitleBox'

export default {
  head:{
    title: 'お問い合わせ',
    type: 'website',
  },
  components: {
    PageWrapper,
    SectionWrapper,
    TitleBox,
  },
}
</script>