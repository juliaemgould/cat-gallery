//Adds image too favorites object and hearts image
function CatPicsItem(props) {
  const [fav, setFav] = useState(false);
  async function favorite() {
    addToFavorites({
      imageId: props.id
    });
    setFav(!fav);
  }

  return (
    <div className="image-con" onDoubleClick={favorite}>
      <img alt={props.title} src={props.url} id={props.id} />
      <div className="favorite">
        {fav && <FontAwesomeIcon icon={"heart"} />}
      </div>
    </div>
  );
}

<div className="image-con">
  <img alt={props.title} src={props.url} id={props.id} />
  <div className="favorite">
    {fav ? (
      <FontAwesomeIcon icon={"heart"} />
    ) : (
      <FontAwesomeIcon icon={"heart"} color="tranparent" />
    )}
  </div>
</div>;

export default CatPicsItem;
