const makeCard = (parkObject) => {

`<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${parkObject.name}</h5>
    <p class="card-text">`Ammenities: ${parkObject.features}`</p>
    <button type="button" class="btn btn-primary">Save</button>
  </div>
</div>`

}