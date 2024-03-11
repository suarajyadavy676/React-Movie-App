function MovieCard(props) {
  const {Poster,Title,Year,Type} = props
  return (
    <>
      <div className="border-2 border-red-900 border-solid text-center mx-auto">
        <img src={Poster} alt="Poster"/>
        <p>{Title}</p>
        <p>{Year}</p>
        <p>{Type}</p>
      </div>
    </>
  );
}

export default MovieCard;
