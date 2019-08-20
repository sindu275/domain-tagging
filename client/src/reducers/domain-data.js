export const domainDataReducer =  (state = [], action) => {
 switch (action.type) {
  case 'GET_DOMAIN_DATA':
   return action.domainData
  default:
   return state
 }
}