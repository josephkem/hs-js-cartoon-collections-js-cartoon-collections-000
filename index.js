function dwarfRollCall(dwarves) {
  var ar = []
  var i = 0
  var x = 0
  var res = ""
  
  while(i<dwarves.length){
    ar.push(""+[i+1]+". "+dwarves[i]+" ")
    i++
  }
  
  while(x<dwarves.length){
    res = res.concat(ar[x])
    x++
  }
  
  return res
  
}
//==================================================================
function summonCaptainPlanet(planeteerCalls){
  var ar = []
  var i = 0
  
  while(i<planeteerCalls.length){
    ar.push(planeteerCalls[i].toUpperCase()+"!")
    i++
  }
  
  return ar
}
//==============================================================
function longPlaneteerCalls(words) {
  var i = 0
  var test = 0
  
  while(i<words.length){
    if(words[i].length>4){
      test++
    }
    
    i++
  }
  
  if(test>0){
    return true
  } else return false
}
//====================================================================
function findTheCheese (foods) {
  var i = 0
  var test
  
  while(i<foods.length){
    if(foods[i] == "cheddar" || foods[i] == "gouda" || foods[i] == "camembert"){
      test = foods[i]
    }
    
    i++
  }
  
  if(test == "cheddar" || test == "gouda" || test == "camembert"){
    return test
  } else return "no cheese!"
}
