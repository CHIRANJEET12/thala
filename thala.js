function submit() {
    let inputnum = document.querySelector("#input").value;
    let msgcontainer = document.querySelector("#msgcontainer");
    let msgcontain = document.querySelector("#msgcontain");
    let video = document.querySelector(".video")
    let video1 =document.querySelector(".video1")


    if (inputnum % 7 === 0) {
        msgcontainer.classList.remove("hide");
        msgcontain.classList.add("hide");
        console.log("THALA");
        video.classList.remove("hide")
        video1.classList.add("hide")
        // thalavid.classList.remove("hide")
        
        
    } else {
        msgcontain.classList.remove("hide");
        console.log("MOYE MOYE");
        msgcontainer.classList.add("hide");
        video.classList.add("hide")
        video1.classList.remove("hide")
        // thalavid.classList.remove("#thala7")
    }
}



    

    // console.log(input);

