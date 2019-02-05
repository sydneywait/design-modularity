
const searchParks = searchParam => {
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${searchParam}=Yes`)
    .then(parks => parks.json())
    .then(parsedParks => {
        // console.log(parsedParks)
        let parkObjectArray = []
        parsedParks.forEach(element => {
            let featureArray = [];
            for (feature in element) {
                // console.log(feature)

                if (element[feature] === "Yes") {
                    featureArray.push(feature)
                    // console.log(featureArray)
                }
            }
            let featureString = buildFeatureString(featureArray)
            let parkObjectToAdd = makeParkObject(element, featureString)
            let cardToPrint = makeCard(parkObjectToAdd)
            // console.log("card to print", cardToPrint)
            renderToDom("#park-cards", cardToPrint)
            parkObjectArray.push(parkObjectToAdd)
            // console.log(parkObjectArray)
        });

    }
    )
}




////Function to get amenities in the features array and turn it into a string



let buildFeatureString = (array) => {
    // console.log("I am inside the buildFeatureString function")
    let featureString = ""
    array.forEach(thing => {
        // console.log("I am inside the for loop")

        let thing2 = thing.split("_").join(" ")
        featureString =`${featureString}, ${thing2}`


    })
    console.log("this is the feature string", featureString)
    //remove the leading comma
    featureString = featureString.replace(", ", "")
    return featureString;
}
// const test = ["hiking_trails", "nature_center", "restrooms_available"]
// const testString = buildFeatureString(test);
// console.log("this is the test String", testString)





