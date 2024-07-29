function MovieCard(props) {
  const {Poster,Title,Year,Type} = props
  return (
    <>
      <div className="text-center mx-auto text-white font-serif shadow-2xl shadow-white rounded-lg">
        <img src={Poster} alt="Poster"/>
        <p>{Title}</p>
        <p>{Year}</p>
        <p>{Type}</p>
      </div>
    </>
  );
}

export default MovieCard;
