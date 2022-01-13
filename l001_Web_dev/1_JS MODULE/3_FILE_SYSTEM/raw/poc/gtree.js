let root = {
    name: "d10",
    children: [
        {
            name: "d20",
            children: [
                {
                    name: "d50",
                    children: []
                },
                {
                    name: "d60",
                    children: []
                }
            ]
        },
        {
            name: "d30",
            children: [
                {
                    name: "d70",
                    children: []
                }
            ]
        },
        {
            name: "d40",
            children: []
        }
    ]
}

function displayGTree(node) {
    let me_and_my_child = "" + node.name + "=>";
    me_and_my_child += "[";
    for(let idx = 0; idx < node.children.length; idx++) {
        let child = node.children[idx];
        me_and_my_child += (idx != node.children.length - 1) ? child.name + ", " : child.name;
    }
    me_and_my_child += "]";
    console.log(me_and_my_child);

    for(let idx = 0; idx < node.children.length; idx++) {
        let child = node.children[idx];
        displayGTree(child);
    }
}

displayGTree(root);