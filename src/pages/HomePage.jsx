
import { toast } from "react-hot-toast";
import { useEffect,useState } from 'react';
import { getTrendingMovies } from 'components/utils/getTrendingMovies';
import Movies from "components/Movies/Movies";


export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const data = await getTrendingMovies();
    
            setMovies(data.results);
            setLoading(false);

          } catch (error) {
            toast.error('Error fetching movies:', error.message);
            setLoading(false);

          }
        };
    
        fetchMovies();
      }, []);
  
    return <div>      {loading ? (
      <p>Loading...</p>
    ) : (
      <Movies movies={movies} />
    )}</div>;
  }
