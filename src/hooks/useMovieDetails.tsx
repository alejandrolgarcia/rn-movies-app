import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieDetail } from '../interfaces/movieInterface';

interface MovieDetails {
    isLoading: boolean;
    movieDetail?: MovieDetail;
    cast: Cast[];
}

export const useMovieDetails = ( movieId: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieDetail: undefined,
        cast: []
    });

    const getMovieDetails = async () => {

        const movieDetailsPromise = movieDB.get<MovieDetail>(`/${ movieId }`);
        const castPromise = movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

        const [ movieDetailsResp, castPromiseResp ] = await Promise.all([ movieDetailsPromise, castPromise ]);

        setState({
            isLoading: false,
            movieDetail: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        });

    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return {
        ...state
    }
}
