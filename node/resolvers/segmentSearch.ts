export const queries = {

  searchSegment: async (
    __: unknown, 
    args: SearchSegmentInput, 
    context: Context
  ) => {

    const { parameterValue } = await context.clients.apps.getAppSettings(
      `${process.env.VTEX_APP_ID}`
    )
    const parameter = 'productClustersId';
    
    if(args.isAuthenticated === true){
      const selectedFacets = args.selectedFacets || [];
      if (selectedFacets.length > 0){
        return [{ key: selectedFacets[0].key, value: selectedFacets[0].value }];
      } 
    } 

    return [{ key: parameter, value: parameterValue }];

  }
}