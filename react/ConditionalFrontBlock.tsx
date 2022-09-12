import type { FC } from "react";
import React from "react";
// import { useRuntime } from "vtex.render-runtime";
import type { Runtime } from './typings/global';
//import atob from 'atob';

type Props = {
  frontValue: number;
};

declare let window: {
  __RUNTIME__: Runtime
};

const ConditionalFrontBlock: FC<Props> = ({
  frontValue,
  children
}) => {
  //obtener de la cookie vtex_segment
  //const segmentToken = window?.__RUNTIME__?.segmentToken;
  let localStorageCode = 3000;
  // let localStorageCode = 1425;
  // let localStorageCode = 1425;
  let conditionalFront = <></>;
  let condition = frontValue;

  const id1 = 1;
  const id2 = 2;
  const id3 = 3;

  // const condition = frontValue;

  if (localStorageCode < 2000) {
    condition = id1;
    return conditionalFront = <>{condition && children}</>;
  } else if (localStorageCode > 2000 && localStorageCode < 5000) {
    condition = id2;
    return conditionalFront = <>{condition && children}</>;
  } else {
    condition = id3;
    return conditionalFront = <>{condition && children}</>;
  }

  /*
  if (frontValue === 1) {
    return conditionalFront = <>{condition && children}</>;
  }
  return conditionalFront;
  */




  /*
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
  */
};

export default ConditionalFrontBlock;
