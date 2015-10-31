var radioButtons = document.querySelectorAll('form > fieldset > label > input[type="radio"]');

for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].onclick = function() {
        
        [].forEach.call(document.getElementsByTagName('fieldset'), function(el) {
            el.classList.remove('show');
        });
        
        document.getElementById(this.value).classList.add('show');
    };
}