//console.log(twig({
//    html: 'Nothing of interest in here'
//}));

Twig.debug = true;

var example = twig({
    html: 'The {{ baked_good }} is a lie. {{ 12.5 + 10 / 2 - 3.5}} == 14'
});
console.log(example);

window.onload = function() {
    document.getElementById("test").innerHTML = example.render({
        baked_good: 'cake'
    });
}

//
//console.log(twig({
//    html: '{{ test }}'
//}));
//console.log(twig({
//    html: '{% if something %}{{ test }}{% endif %}'
//}));

// var output = test_template.render(model);
