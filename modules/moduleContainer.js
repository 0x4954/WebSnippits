fetch("./moduleContainerTemplate.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {
    class ModuleContainer extends HTMLElement {
        set value(value) {
            this._value = value;
            this.valueElement.innerText = this._value;
        }

        get value() {
            return this._value;
        }

        constructor() {
            super();
            this._value = 0;

            var shadow = this.attachShadow({mode: 'open'});

            shadow.innerHTML = html;
        }
    }

    customElements.define('module-container', ModuleContainer);
}