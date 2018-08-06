import gql from 'graphql-tag'

export default {
  published: {
    all: gql`
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
  }
}
