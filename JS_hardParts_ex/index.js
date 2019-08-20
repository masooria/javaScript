var walk_DOM = function walk(node, func){
    func(node);
    node = node.firstChild;
    while (node){
        walk (node, func);
        node = node.nextSibling;
    }
}
function print (node){
    console.log('--> '+ node)
}
var getElementsByAtrribute = function(att, value){
    var results = [];
    walk_DOM(document.body, function(node){
        var actual = node.nodeType === 1 && node.getAttribute(att);
        print (actual)
        if (typeof actual === 'string' && (actual === value || typeof value !== 'string')){
            print ('--------->' +actual)
            results.push(node);
        }
    });
    console.log(results);
}

console.log('started')
// walk_DOM(document.body, print);
getElementsByAtrribute('target')