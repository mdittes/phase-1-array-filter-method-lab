// Code your solution here
function findMatching(drivers, names) {
    return drivers.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === names.toLowerCase()
    );
};

function fuzzyMatch(drivers, string) {
    return drivers.filter(
        (possibleMatch) => 
            possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    );
};

function matchName(drivers, driverName) {
    return drivers.filter((record) => record.name === driverName);
}