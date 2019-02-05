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