function onSubmit(event){
    event.preventDefault();

    let form = event.target;

    let name = form.userName.value;
    let age = form.userAge.value;
    let from = form.userFrom.value;
    // в разработке
    // let like = form.userLike.value;

    console.log("name: " + name);
    console.log("age: " + age);
    console.log("from: " + from);
    // в разработке
    // console.log("like: " + like);

    let sA = "Жил-был, паренек веселый, жил здорово. Звали его " + name;
    let sB = ", отроду ему было " + age;
    let sC = ". И работал он в " + from;
    story.innerHTML = sA + sB + sC;
}

popitka.addEventListener("submit", onSubmit);