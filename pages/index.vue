<template lang='pug'>
  section.container
    applogo
</template>

<script>
import gql from 'graphql-tag'
import AppLogo from '~/components/AppLogo.vue'
import unauthenticatedMixin from '~/mixins/unauthenticated.js'
import queries from '~/graphql/queries/navigation.js'

export default {
  data: () => ({
    loading: 0
  }),
  apollo: {
    $loadingKey: 'loading',
    navigations: {
      query: queries.published.all
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
