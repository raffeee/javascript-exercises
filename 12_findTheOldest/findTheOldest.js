const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let currAge = person.yearOfDeath - person.yearOfBirth;
        if (currAge > oldestAge) {
            oldest = person
        }
        return oldest
    }, arr[0])
};

// Do not edit below this line
module.exports = findTheOldest;
