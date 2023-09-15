console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#viewKoalas' ).on( "click", ".deleteButton", deleteKoala);
  $( '#viewKoalas' ).on( "click", ".readyButton", updateKoala);

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

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: "GET",
    url: "/koalas",
  })
    .then((response) => console.log('GET request for /koalas!', response)) // appendDom replace console.log
    .catch((err) => console.log(err));
}; // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );

  // ajax call to server to post koalas
 $.ajax({
  method: "POST",
  url: "/koalas",
  data: newKoala,
 }).then(() => getKoalas())
 .catch((err) => console.log(err));
};
  // ajax call to server to get koalas
 
}
const deleteKoala = (event) => {
  const id = $(event.target).data("id");
  $.ajax({
    method: "DELETE",
    url: `/koalas/${id}`,
  }).then(() => getKoalas()).catch((err) => console.log(err));
}; // end of deleteKoala
