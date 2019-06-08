<template lang="pug">
  page-wrapper
    section-wrapper(pos='center')
      title-box(title='お問い合わせ')
      iframe(
        :src='apiKey',
        width='100%',
        height='720px',
        frameborder='0',
        marginheight='0',
        marginwidth='0'
      ) 読み込んでいます...
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
  asyncData: context =>
    ({
      apiKey:`https://docs.google.com/forms/d/e/${context.env.FORMS_API}/viewform?embedded=true`
    }),
}
</script>