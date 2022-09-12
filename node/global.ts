import {
  IOContext,
  ParamsContext,
  RecorderState,
  ServiceContext,
  SegmentData,
} from '@vtex/api'

import { Clients } from './clients/index'

declare global {
  type Context = ServiceContext<Clients, RecorderState, CustomContext>

  interface CustomContext extends ParamsContext {
    vtex: CustomIOContext
  }
  interface CustomIOContext extends IOContext {
    segment?: SegmentData
  }

  interface SearchSegmentInput {
    userEmail?: string
    isAuthenticated?: boolean
    selectedFacets?: SelectedFacet[]
  }

  interface SelectedFacet {
    key: string
    value: string
  }
}
