function me(name, lastname, age, favoritefood, favoriteseries, favoritefilm){
this.name = name;
this.lastname = lastname;
this.age = age;
this.favoritefood = favoritefood;
this.favoriteseries = favoriteseries;
this.favoritefilm = favoritefilm;
this.updateAge = function(){
return ++this.age;
};
}


let me = new Me(thomas, brans, 21, dono, altered_carbon, matrix );

console.log(me.updateAge())