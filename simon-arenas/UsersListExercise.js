// Objects
const users = [
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
users.forEach((user) =>
  user.position === "Associate Software Engineer"
    ? (user.isTraining = true)
    : (user.isTraining = false)
);

// Filter object
const search = (attr, value) =>
  console.log(users.filter((user) => user[attr] === value));

search("name", "María");
