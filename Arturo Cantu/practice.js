let users = [
  {
    id:1,
    name:"Arturo",
    lastname:"Cantu",
    email:"arturocantu@rocketmail.com",
    position:"Associate Software Engineer"
  },
  {
    id:2,
    name:"Cesar",
    lastname:"Vega",
    email:"c.vega@theksquaregroup.com",
    position:"Associate Software Engineer"
  },
  {
    id:3,
    name:"Alejandro",
    lastname:"Gonzalez",
    email:"a.gonzalez@theksquaregroup.com",
    position:"Associate Software Engineer"
  },
  {
    id:4,
    name:"Fernando",
    lastname:"Castillo",
    email:"f.castillo@theksquaregroup.com",
    position:"Associate Software Engineer"
  },
  {
    id:5,
    name:"Simon",
    lastname:"Arenas",
    email:"s.arenas@theksquaregroup.com",
    position:"Associate Software Engineer"
  },
  {
    id:6,
    name:"Rafael",
    lastname:"Martinez",
    email:"r.martinez@theksquaregroup.comm",
    position:"Software Engineer"
  },
  {
    id:7,
    name:"Jaime",
    lastname:"Furlong",
    email:"j.furlong@theksquaregroup.com",
    position:"Software Engineer"
  },
  {
    id:8,
    name:"Beatriz",
    lastname:"Osorio",
    email:"b.osorio@theksquaregroup.com",
    position:"Software Engineer"
  },
]

users.forEach(function (item) {
  if(item.position == "Software Engineer"){
    item.training = false;
  } else {
    item.training = true;
  }
});

function find(attribute, value){
  users.forEach(function (item) {
    if(item[attribute] === value){
      console.log(item["id"] + " " + item["name"] + " " + item["lastname"]);
    }
  });
}

find("position", "Software Engineer");