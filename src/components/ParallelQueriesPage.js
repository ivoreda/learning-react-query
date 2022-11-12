import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:3000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:3000/friends");
};
export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeros);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <div>
      <h2>Parallel Query page</h2>
      {friends?.data.map((friend) => {
        return <div key={friend.id}>{friend.name}</div>;
      })}

      {superHeroes?.data.map((superHero) => {
        return <div key={superHero.id}>{superHero.id}</div>;
      })}
    </div>
  );
};
