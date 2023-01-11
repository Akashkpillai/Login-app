const express = require("express");
const router = express.Router();

router.get('/', function(req, res, next) {
  var products = [
    {
         name:"VALORENT : 200$",     
         description:"VALORENT is a multiplayer fpp game,You can play with your friends and explore different world",     
         image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.o3rPf9VYGulQ_pLrudJiwAHaEH%26pid%3DApi&f=1"
      
    },
    {
      name:"PUBG  : 300$ ",     
      description:"Player Unknown Battle Ground is a multiplayer online game you can play with your friend. ",     
      image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.H6T9pVrtD64JNCAEGsWMqQHaEK%26pid%3DApi&f=1" 
      
    },
    {
     
      name:"FALL GUYS  :  100$",
      description:"Fall Guys is a multiplayer online battel you can play with other players in this battle",     
      image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nkCRlHtsM43mhY1p-X9ecgHaEK%26pid%3DApi&f=1"
    },
    {
    
      name:"GTA 5  : 500$ ",
      description:"Grant Theft Auto 5 is a open world game you can enjoy everything in this game.GTA 5 is an adult game",
      image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-WwwBBmALiK-ZoTi9uGz7QHaEK%26pid%3DApi&f=1"

    }
  ]
 
if (req.session.login) {
  res.render('home', {products});
} else {
  res.redirect("/");
  
}
});

module.exports = router;



