
//findMatching
// This function takes an array of drivers' names and a string as arguments
// and returns the matching list of drivers
// The function should be case insensitive
const drivers = [
    {
        "name": 'Bobby',
        "hometown": 'nyc',
    },
    {
        "name": 'Bobby',
        "hometown": 'nyc',
    },
    {
        "name": 'Bobby',
        "hometown": 'nyc',
    }
]

function findMatching(drivers, name) {
   return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}


function fuzzyMatch(drivers, letters){
    return drivers.filter((driver) => driver.toLowerCase().startsWith(letters.toLowerCase())
    )
}


function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name === name)
    }
