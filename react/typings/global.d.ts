export interface Runtime {
  segmentToken: string
}

export interface TimeSplit {
  hours: string
  minutes: string
  seconds: string
}

type GenericObject = Record<string, any>
