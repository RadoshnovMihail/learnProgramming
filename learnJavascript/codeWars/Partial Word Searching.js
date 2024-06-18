function wordSearch(query, seq) {
    query = query.toLowerCase(); // Convert query to lowercase for case-insensitive comparison

    const foundStrings = seq.filter(str => str.toLowerCase().includes(query));

    if (foundStrings.length === 0) {
        return ["Empty"];
    }

    return foundStrings;
}

// Example usage
const query = "me";
const stringsToSearch = ["home", "milk", "Mercury", "fish"];
const result = wordSearch(query, stringsToSearch);
console.log(result); // Output: ["home", "Mercury"]