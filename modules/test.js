let moduleConfig;

// fetch("./moduleConfig.json")
//     .then((response) => response.json())
//     .then((json) => this.moduleConfig = json);

function readJson() {
    fetch("./moduleConfig.json").then((res) => {
        return res.json;
    })
    .then((data) => this.moduleConfig = data);
}

    //console.log(moduleConfig.);
    // if (moduleConfig.ShadowDOM == true) {
         console.log("YES");
    // }