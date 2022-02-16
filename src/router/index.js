import React from 'react'

import { Redirect } from 'react-router-dom'

import CenaDiscover from '../pages/discover'
import CenaRecommend from "../pages/discover/c-pages/recommend";
import CenaRanking from "../pages/discover/c-pages/ranking";
import CenaSongs from "../pages/discover/c-pages/songs";
import CenaDjradio from "../pages/discover/c-pages/djradio";
import CenaArtist from "../pages/discover/c-pages/artist";
import CenaAlbum from "../pages/discover/c-pages/album";

import CenaFriend from '../pages/friend'
import CenaMine from '../pages/mine'

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to={"/discover/"}/>
    )
  },
  {
    path: "/discover",
    component: CenaDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: CenaRecommend
      },
      {
        path: "/discover/ranking",
        component: CenaRanking
      },
      {
        path: "/discover/songs",
        component: CenaSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: CenaDjradio
      },
      {
        path: "/discover/artist",
        component: CenaArtist
      },
      {
        path: "/discover/album",
        component: CenaAlbum
      },
    ]
  },
  {
    path: "/mine",
    component: CenaMine
  },
  {
    path: "/friend",
    component: CenaFriend
  }
]

export default routes