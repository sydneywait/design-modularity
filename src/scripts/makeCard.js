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

const makeCard = (parkObject) => {

return `<div class="card">
    <div class="card-body">
    <h4 class="card-title">${parkObject.name}</h4>
    <h5 class="card-title">${parkObject.address}</h5>
    <p class="card-text">This park contains ${parkObject.size} of pristinely maintained park land.  It also includes the following amenities: ${parkObject.features}</p>
    <button type="button" class="btn btn-save">Save</button>
  </div>
</div>`

}