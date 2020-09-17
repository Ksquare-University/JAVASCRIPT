var user_list = [];
var current_id = 0;
class user{
    constructor(id,name,last_name,email,position) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.position = position;
    }
}
create_user = function(id,name,last_name,email,position){
    let current_user = new user(id,name,last_name,email,position);
    user_list.push(current_user);
    current_id += 1;
}


let user_0 = create_user(current_id,"Carlos","Nuevo","CarlosN@KSq.com","Software Engineer");
let user_1 = create_user(current_id,"Arturo","Nuevo","ArturoN@KSq.com","Associate Software Engineer");
let user_2 = create_user(current_id,"Karla","Arena","KarlaA@KSq.com","Software Engineer");
let user_3 = create_user(current_id,"Carolina","Rodriguez","CarolinaR@KSq.com","Associate Software Engineer");
let user_4 = create_user(current_id,"Ana","Sanchez","AnaS@KSq.com","Associate Software Engineer");
let user_5 = create_user(current_id,"Andres","Sanchez","AndresS@KSq.com","Associate Software Engineer");


user_list.forEach(user => { 
    if(user.position == "Associate Software Engineer"){
        user.is_training = true;
    } else{
        user.is_training = false;
    }
}); 

//console.log(user_list);

// Filter by any value in the filter
printerFilter = function (filter){
    user_list.forEach(user => { 
        for (const key in user) {
            if(user[key] == filter){
                console.log(user);
            }
        }
    }); 
}("Mario"); //Retrurns nothing because there is no mario.

//If you want to filter by certain key:
printerFilter_key = function (filter,filterKey){
    user_list.forEach(user => { 
        for (const key in user) {
            if(key == filterKey){
                if(user[key] == filter){
                    console.log(user);
                }
            }
        }
    }); 
}("Nuevo","last_name");
//Returns Carlos and arturo.