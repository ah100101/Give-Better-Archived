<template lang='pug'>
  section.container
    applogo
</template>

<script>
import gql from 'graphql-tag'
import AppLogo from '~/components/AppLogo.vue'
import unauthenticatedMixin from '~/mixins/unauthenticated.js'

const navigationQuery = gql`
  query navigations {
    navigations(where: {status:PUBLISHED}) {
      status
      name
      brandLabel(where: {status:PUBLISHED}) {
        value
      }
      pages(where:{status:PUBLISHED}) {
        title
        urlName
        requireAuthentication
      }
    }
  }
`

export default {
  data: () => ({
    loading: 0
  }),
  apollo: {
    $loadingKey: 'loading',
    navigations: {
      query: navigationQuery
    }
  },
  components: {
    applogo: AppLogo
  },
  mixins: [
    unauthenticatedMixin
  ]
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

</style>
