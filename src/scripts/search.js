
    document.querySelector(".btn-primary").addEventListener("click", () =>{


    let searchTerm = document.querySelector("#search-bar").value

    // Take user input and replace any spaces with dashes
    searchTerm = searchTerm.replace(" ","_")
    console.log("This is the search term", searchTerm)
searchParks(searchTerm)
    return searchTerm;

})

document.querySelector("#search-bar").addEventListener("keyup", () =>{
if(event.keyCode ===13){

    let searchTerm = document.querySelector("#search-bar").value

    // Take user input and replace any spaces with dashes
    searchTerm = searchTerm.replace(" ","_")
    console.log("This is the search term", searchTerm)
searchParks(searchTerm)
    return searchTerm;
}

})
