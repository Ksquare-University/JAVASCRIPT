const list = [
  {
    id: 1,
    name: "Fernando",
    lastName: "Castillo",
    email: "fcastillocosme@gmail.com",
    position: "Associate Software Engineer",
  },
  {
    id: 2,
    name: "Arturo",
    lastName: "Cantu",
    email: "a.cantu@gmail.com",
    position: "Associate Software Engineer",
  },
  {
    id: 3,
    name: "Simon",
    lastName: "Arenas",
    email: "simon.arenas@gmail.com",
    position: "Associate Software Engineer",
  },
  {
    id: 4,
    name: "Cesar",
    lastName: "Vega",
    email: "cesar.vega@gmail.com",
    position: "Associate Software Engineer",
  },
  {
    id: 5,
    name: "Alejandro",
    lastName: "Gonzales",
    email: "alejando.g@gmail.com",
    position: "Associate Software Engineer",
  },
  {
    id: 6,
    name: "Rafael",
    lastName: "Martinez",
    email: "rafa.mar@theksquaregroup.com",
    position: "Software Engineer",
  },
  {
    id: 7,
    name: "Beatriz",
    lastName: "Osorio",
    email: "beatriz.osorio@theksquaregroup.com",
    position: "Software Engineer",
  },
  {
    id: 8,
    name: "Magaly",
    lastName: "Cruz",
    email: "magalymagaly@theksquaregroup.com",
    position: "Software Engineer",
  },
  {
    id: 9,
    name: "Jesus",
    lastName: "Berzunza",
    email: "jesusjesus@theksquaregroup.com",
    position: "Software Engineer",
  },
  {
    id: 10,
    name: "Varma",
    lastName: "Perez",
    email: "vharmavharma@theksquaregroup.com",
    position: "Software Engineer",
  },
];

list.forEach((user) =>
  user.position == "Software Engineer"
    ? (user.isTraining = false)
    : (user.isTraining = true)
);

function showByProperty(property, filter) {
  return list.filter((user) => user[property] == filter);
}

console.log("Show by position: Software Engineer");
console.log(showByProperty("position", "Software Engineer"));
console.log("\nShow by id: 1");
console.log(showByProperty("id", "1"));
console.log("\nShow by name: Varma");
console.log(showByProperty("name", "Varma"));
