import CatPicsItem from "./CatPicsItem.react";
function CatPicsList(props) {
  return (
    <div>
      {props.catPics.map((catpic) => (
        <CatPicsItem
          key={catpic.id}
          id={catpic.id}
          url={catpic.url}
          imageid={catpic.imageid}
        />
      ))}
    </div>
  );
}

export default CatPicsList;
