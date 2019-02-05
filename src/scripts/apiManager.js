
// const parkManager = () => {
fetch("https://data.nashville.gov/resource/xbru-cfzi.json")
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
            console.log("card to print", cardToPrint)
            renderToDom("#park-cards", cardToPrint)
            parkObjectArray.push(parkObjectToAdd)
            // console.log(parkObjectArray)
        });

    }
    )
// }

/////  Function to create an object with information from each park
const makeParkObject = (object, features) => {

    // build an object using data pulled from JSON
    let parkObject =
    {
        "name": object.park_name,
        "size": `${object.acres} acres`,
        "features": features,
        "address": `${object.mapped_location_address}, ${object.mapped_location_city}, ${object.mapped_location_state}`

    }
    return parkObject;
}

////Function to get amenities in the features array and turn it into a string

const test = ["hiking_trails", "nature_center", "restrooms_available"]

let buildFeatureString = (array) => {
    console.log("I am inside the buildFeatureString function")
    let featureString = ""
    array.forEach(thing => {
        console.log("I am inside the for loop")

        let thing2 = thing.split("_").join(" ")
        featureString =`${featureString}, ${thing2}`
        console.log("this is the feature string", featureString)
    })

    return featureString;
}

// const testString = buildFeatureString(test);
// console.log("this is the test String", testString)


