import MovieDetailsView from 'components/MovieDetailsView/MovieDetailsView';
import NavigationDetails from 'components/NavigationDetails/NavigationDetails';
import { getMovieById } from 'components/utils/getMovieById';
import React, { useEffect, useRef, useState } from 'react';
import { useParams,Outlet, useLocation,} from 'react-router-dom';
import { StyleBtnGoBack } from './MoviePage.style';




export default function MoviePage() {
  const location = useLocation();;
  const backLinkRef = useRef(location);
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);


  
    useEffect(() => {
        const fetchMovieDetails = async () => {
          try {
            const data = await getMovieById(movieId);
            setMovieDetails(data);
          } catch (error) {
            console.error('Error fetching movie details:', error);
          }
        };
    
        fetchMovieDetails();
      }, [movieId]);
    return (
        <div>
          <StyleBtnGoBack to={backLinkRef.current.state?.from || `/`}>go home</StyleBtnGoBack>
          {movieDetails && (
        <MovieDetailsView movie={movieDetails}/>
          )}
          <NavigationDetails movieId={movieId} movie={movieDetails}/>
 
      <Outlet />
    </div>
      );
    }
