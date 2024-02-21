import { useParams } from "react-router-dom";
import { Style } from "./MovieDetailStyle";
import api from "../../helpers/baseApi/api";
import { useEffect, useState } from "react";
import imgBase from "../../helpers/globalVariables/img-path/imgBasePath";
import PrimaryHeaderFooter from "../../Components/Layout/PrimaryHF/PrimaryHeaderFooter";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getApi();
  }, []);
  async function getApi() {
    try {
      const res = await api.get(`movie/${id}`);
      setMovie(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Style>
      <PrimaryHeaderFooter>
        <div className="container">
          {" "}
          <div> {id}</div>
          <div> {movie.title}</div>
          <img src={`${imgBase.orURL}${movie.backdrop_path}`} />
        </div>
      </PrimaryHeaderFooter>
    </Style>
  );
}
