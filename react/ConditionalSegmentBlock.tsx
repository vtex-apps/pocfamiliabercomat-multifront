import type { FC } from "react";
import React from "react";
// import { useRuntime } from "vtex.render-runtime";
import type { Runtime } from './typings/global';
import atob from 'atob';

type Props = {
  segmentValue: number;
  isDefault: boolean
};

declare let window: {
  __RUNTIME__: Runtime
};

const ConditionalSegmentBlock: FC<Props> = ({
  segmentValue,
  isDefault,
  children,
}) => {
  //obtener de la cookie vtex_segment
  const segmentParameter = 'productClustersId';
  const segmentToken = window?.__RUNTIME__?.segmentToken;
  const defaultBanner = isDefault;
  let selectedSegment = <>{defaultBanner && children}</>;

  if (segmentToken) {
    const segmentTokenInfo = JSON.parse(atob(segmentToken));
    
    if (segmentTokenInfo && segmentTokenInfo.facets) {
      let segmentFacet = (segmentTokenInfo.facets).split("=");
      let facetParameter = segmentFacet[0];
      let facetParameterId = segmentFacet[1].split(";")[0];  
      const condition = segmentValue == facetParameterId;

      if (segmentParameter === facetParameter) {
        selectedSegment = <>{condition && children}</>;
      }
    }

  }

  return selectedSegment;
};

export default ConditionalSegmentBlock;
