// Objects
const Users = [
  {
    id: 1,
    name: "Simon",
    lastName: "Arenas",
    email: "simon.arenas@ksquare.com",
    position: "Associate Software Engineer",
  },
  {
    id: 2,
    name: "Luis",
    lastName: "González",
    email: "luis@ksquare.com",
    position: "Software Engineer",
  },
  {
    id: 3,
    name: "María",
    lastName: "Lastra",
    email: "maria@ksquare.com",
    position: "Software Engineer",
  },
  {
    id: 4,
    name: "José",
    lastName: "Martínez",
    email: "jose@ksquare.com",
    position: "Associate Software Engineer",
  },
  {
    id: 5,
    name: "Miguel",
    lastName: "Escamilla",
    email: "miguel@ksquare.com",
    position: "Software Engineer",
  },
];


// Add training key - value
let training = Users.forEach((value) =>
  value.position === "Associate Software Engineer"
    ? (value.isTraining = true)
    : (value.isTraining = false)
);

// Filter object
const search = Users.filter((user) => {
  return user.isTraining === false;
});
console.log(search);
