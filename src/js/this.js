function funMode1() {
    let home = "xian";
    return getHome = function () {
        console.log(home);
    }
}
function funMode2() {
    let home = "xian";
    return getHome = function () {
        console.log(home);
    }
}
function funMode3() {
    let home = "xian";
    return getHome= ()=> {
        console.log(home);
    }
}

// funMode1()()
// funMode2()()
// funMode3()()

class classMode {
    constructor(){
        this.home = "xian";
    }
    getHome () {
        this.home = "nanjing"
        console.log(this.home,"asdadf");
    }
}

let tmp = new classMode()
classMode.prototype.getHome()
tmp.getHome()