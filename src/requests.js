import axios from 'axios';
import apiKey from './config'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchTopRated: `movie/top_rated?api_key=${apiKey}&language=en-US`
}

export default requests