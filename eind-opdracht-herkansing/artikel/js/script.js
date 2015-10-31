var readMoreTest = document.querySelectorAll('body > section.releted > h2');
console.log(readMoreTest);
for (var i = 0; i < readMoreTest.length; i++) {
    console.log(readMoreTest[i]);
    readMoreTest[i].onclick = function() {
        console.log('ssddfsd');
        [].forEach.call(document.querySelectorAll('body > section > article'), function(el) {
            el.classList.remove('show');
        });
        
        document.getElementsByTagName('article').classList.add('show');
    };
}