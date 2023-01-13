
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

/// fuzzyMatch
// This function takes an array of drivers' names and a string as arguments for querying the array
//returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, letters){
    return drivers.filter((driver) => driver.toLowerCase().startsWith(letters.toLowerCase())
    )
}


/// matchName - 
///This function takes an array of driver objects and a string as arguments
/// Each driver object has two properties: name and hometown. 
///The function should return each element whose name property matches the provided string argument.
function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name === name)
    }
