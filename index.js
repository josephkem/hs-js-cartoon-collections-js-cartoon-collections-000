function dwarfRollCall(dwarves) {
  var ar = []
  var i = (dwarves.length/2)
  var x = (dwarves.length/2)
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
    if(foods[i] == "cheddar" || foods[i] == "gouda" || foods[i] == "camembert" || foods[i] == "swiss cheese"){
      test = foods[i]
    }
    
    i++
  }
  
  if(test == "cheddar" || test == "gouda" || test == "camembert" || foods[i] == "swiss cheese"){
    return test
  } else return "no cheese!"
}


function wordWithB(words){
  var ar = []

  
  for(let i = 0; i<words.length;i++){
    if(words[i].charAt(0) == "b" || words[i].charAt(0) == "B"){
      ar.push(words[i])
    }
  }
  
  
}
