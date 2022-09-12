import { Service, RecorderState, ParamsContext } from '@vtex/api'
import schema from 'vtex.search-segment-graphql/graphql'

import { Clients, clients } from './clients'
import { queries as segmentSearchQueries } from './resolvers/segmentSearch'

export default new Service<Clients, RecorderState, ParamsContext>({
  clients,
  graphql: {
    resolvers: {
      Query: {
        ...segmentSearchQueries,
      },
    },
    schema,
  },
})
