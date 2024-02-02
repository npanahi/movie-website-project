import Header from "../../Components/SecondaryComps/Header/Header";
import MovieList from "../../Components/SecondaryComps/MovieList/MovieList";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container bg-y">
        <MovieList className={"m-t-100"} />
      </div>
    </>
  );
}
