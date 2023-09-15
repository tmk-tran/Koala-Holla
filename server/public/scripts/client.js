console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      ready: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

//ajax GET
function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

//ajax POST
function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}


function appendDom(koalas){
  $("#viewKoalas").empty();

  for (let i = 0; i < koalas.length; i += 1) {
    let koala = koalas[i];
    // For each book, append a new row to our table
    $("#viewKoalas").append(`
      <tr>
        <td>${koala.name}</td>
        <td>${koala.gender}</td>
        <td>${koala.age}</td>
        <td>${koala.ready}</td>
        <td>${koala.notes}</td>
        <td><button class="readyButton" data-id=${koala.id}  data-ready=${koala.ready} >${koala.ready ? "Not Ready": "Ready"}</button></td>
        <td><button class="deleteButton" data-id=${koala.id} >Delete</button></td>
      </tr>
    `);
  }
};


// ajax PUT
function updateKoala(event){
  const id = $(event.target);
  const isReady = $(event.target).data("id");
  console.log(id, isReady);

  $.ajax({
    method: "PUT",
    url: `/koalas/${id}`,
    data: {isReady: !isReady},
  })
  .then()
  .catch()

}