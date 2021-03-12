const challengeFunction = function(rookCell, destinationCell){
    let posicion = destinationCell.split('')
    return rookCell.includes(posicion[0]) || rookCell.includes(posicion[1]) 
}

module.exports = challengeFunction
