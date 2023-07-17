fetch("./moduleMenuTemplate.html")
    .then(stream => stream.text())
    .then(text => define(text));

// fetch("./moduleConfig.json")
//     .then((response) => response.json())
//     .then((json) => this.moduleConfig = json);



function define(html) {
    class ModuleMenu extends HTMLElement {
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

            if(moduleConfig.shadowDOM == true) {
                var shadow = this.attachShadow({mode: 'open'});
            }

            shadow.innerHTML = html;

        }
    }

    customElements.define('module-menu', ModuleMenu);
}