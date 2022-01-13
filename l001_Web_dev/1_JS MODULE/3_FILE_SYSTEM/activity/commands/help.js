function helperFn() {
    console.log(`
        List of all the commands:
            node main.js help
            node main.js organize <dir-name>
            node main.js view <dir_name> flat
            node main.js view <dir_name> tree
    `);
}

// nodejs -> export
module.exports = {
    helperKey : helperFn
}
