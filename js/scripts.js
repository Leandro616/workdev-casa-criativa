function onOff() {
    document
        .querySelector("div#modal")
        .classList
        .toggle("hide");

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll");

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll");
}
