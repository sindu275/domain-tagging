import {getDomainData} from '../repositories/domain';

export const updateDomainData = () => async dispatch => {
    const domainData = await getDomainData();
    
    dispatch({
     type: 'GET_DOMAIN_DATA',
     domainData
    })
   }