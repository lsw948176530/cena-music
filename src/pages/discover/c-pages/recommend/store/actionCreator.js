import * as actionTypes from './constans';

import { getTopBanners } from '@/services/recommend'

const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners:res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}