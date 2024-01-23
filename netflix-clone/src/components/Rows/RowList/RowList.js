import React from 'react'
import Row from '../../Rows/Row/Row'
import requests from '../../../Utils/requests'
const RowList = () => {
  return (
    <>
    <Row
    title={"NETFLIX ORIGINALS"}
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />

    <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
    <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>



    </>
  )
}

export default RowList



