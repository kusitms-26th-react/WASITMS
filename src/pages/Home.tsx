import { getMovies, NowPlaying } from "@/apis/movie";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data } = useQuery<NowPlaying>(["movie"], getMovies);
  console.log(data);
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
