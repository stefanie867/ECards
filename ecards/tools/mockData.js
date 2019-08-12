const getContent = () => {
  return (
    `This impressive paella is a perfect party dish and a fun meal to cook together with your
    guests. Add 1 cup of frozen peas along with the mussels, if you like.`
  );
};

const getDetailedContent = () => {
  return (
    `Method:
    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
    minutes.
    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
    again without stirring, until mussels have opened and rice is just tender, 5 to 7
    minutes more. (Discard any mussels that don’t open.)
    Set aside off of the heat to let rest for 10 minutes, and then serve.`
  );
};

const content = [{
  key: 1,
  title: "Shrimp and Chorizo Paella",
  subheader: "September 14, 2016",
  media: "/public/images/logo.svg",
  mediaTitle: "Paella dish",
  content: getContent(),
  detailedContent: getDetailedContent()
}, {
  key: 2,
  title: "Shrimp and Chorizo Paella",
  subheader: "September 15, 2016",
  media: "/public/images/logo.svg",
  mediaTitle: "Paella dish",
  content: getContent(),
  detailedContent: getDetailedContent()
}, {
  key: 3,
  title: "Shrimp and Chorizo Paella",
  subheader: "September 16, 2016",
  media: "/public/images/logo.svg",
  mediaTitle: "Paella dish",
  content: getContent(),
  detailedContent: getDetailedContent()
}];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  content
};
