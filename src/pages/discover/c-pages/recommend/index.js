import React, { memo } from 'react'
import { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';

import { getTopBannerAction } from './store/actionCreator'

function CenaRecommend(props) {

  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])


  return (
    <div>CenaRecommend: {topBanners.length }</div>
  )
}





export default memo(CenaRecommend)


// function CenaRecommend(props) {

//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>CenaRecommend: {topBanners.length}</div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispathToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })