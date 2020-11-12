import apiKey from './config'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchTopRated: `movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchLatest: `/movie/latest?api_key=${apiKey}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    fetchTopRatedTV: `/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    fetchAction: ``,
    fetchComedy: ``,
    fetchHorror: ``
}

export default requests