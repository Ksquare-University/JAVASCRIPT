let list = [
  { id: 1, name: "Fernando", lastname: "Castillo", email: "fcastillocosme@gmail.com", position: "Associate Software Engineer" },
  { id: 2, name: "Arturo", lastname: "Cantu", email: "a.cantu@gmail.com", position: "Associate Software Engineer" },
  { id: 3, name: "Simon", lastname: "Arenas", email: "simon.arenas@gmail.com", position: "Associate Software Engineer" },
  { id: 4, name: "Cesar", lastname: "Vega", email: "cesar.vega@gmail.com", position: "Associate Software Engineer" },
  { id: 5, name: "Alejandro", lastname: "Gonzales", email: "alejando.g@gmail.com", position: "Associate Software Engineer" },
  { id: 6, name: "Rafael", lastname: "Martinez", email: "rafa.mar@theksquaregroup.com", position: "Software Engineer" },
  { id: 7, name: "Beatriz", lastname: "Osorio", email: "beatriz.osorio@theksquaregroup.com", position: "Software Engineer" },
  { id: 8, name: "Magaly", lastname: "Cruz", email: "magalymagaly@theksquaregroup.com", position: "Software Engineer" },
  { id: 9, name: "Jesus", lastname: "Berzunza", email: "jesusjesus@theksquaregroup.com", position: "Software Engineer" },
  { id: 10, name: "Varma", lastname: "Perez", email: "vharmavharma@theksquaregroup.com", position: "Software Engineer" }
];

list.forEach(user => user.position == "Software Engineer" ? user["is training"] = false : user["is training"] = true);

function showByAttribute(attribute, filter) {      
  return list.filter(user => user[attribute] == filter);
}

console.log('Show by position: Software Engineer');
console.log(showByAttribute("position", "Software Engineer"));
console.log('\nShow by id: 1');
console.log(showByAttribute("id", "1"));
console.log('\nShow by name: Vharma');
console.log(showByAttribute("name", "Varma"));
