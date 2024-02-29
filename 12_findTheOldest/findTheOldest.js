const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        let currentDate = new Date();
        let oldestAlive = oldest.yearOfDeath === undefined;
        let currAlive = person.yearOfDeath === undefined;

        let oldestAge = ((oldestAlive ? currentDate.getFullYear() : oldest.yearOfDeath) - oldest.yearOfBirth)
        let currAge  = ((currAlive ? currentDate.getFullYear() : person.yearOfDeath) - person.yearOfBirth)

        if (currAge > oldestAge) {
            oldest = person
        }
        return oldest
    }, arr[0])
};

// Do not edit below this line
module.exports = findTheOldest;
