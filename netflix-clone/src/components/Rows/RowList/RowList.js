import React from 'react'
import Row from '../../Rows/Row/Row'
import requests from '../../../Utils/requests'
const RowList = () => {
  return (
    <>
    <Row
    title="NETFLIX ORIGINALS"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />

    <Row title="Continue Watching for Johnny" fetchUrl={requests.fetchTrending}/>
    <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/><Row title="AdventureMovies" fetchUrl={requests.fetchAdventureMovies}/>
    <Row title="DocumentaryMovies" fetchUrl={requests.fetchDocumentaryMovies}/>
    <Row title="AnimationMovies" fetchUrl={requests.fetchAnimationMovies}/>
    <Row title="Crime" fetchUrl={requests.fetchCrime}/>
    <Row title="History" fetchUrl={requests.fetchHistory}/>
    <Row title="War" fetchUrl={requests.fetchWar}/>
    <Row title="AmharicMovies" fetchUrl={requests.fetchDramaMovies}/>
    



    </>
  )
}

export default RowList



