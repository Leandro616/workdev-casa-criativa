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

function checarCampos(event) {
    
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value) {

        const checkIsString = typeof event.target[value].value === "string"
        const checkIsEmpty = !event.target[value].value.trim()

        if (checkIsString && checkIsEmpty) {
            return true
        }
    })

    if (isEmpty) {
        event.preventDefault()
        alert("Preencha todos os campos")
    }
}
