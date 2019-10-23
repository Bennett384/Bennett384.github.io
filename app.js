console.log($);



$(()=>{


	$('form').on('submit', (event) =>{

		 event.preventDefault();

		const userInput = $('input[type="text"]').val();




     $.ajax({

        url:'https://rickandmortyapi.com/api/character/' + userInput,

    }).then(

        (data) => {

    			// console.log(data);

    		$('#name').html(data.name);
    		$('#status').html(data.status);
    		$('#species').html(data.species);
    		$('#episodes').html(data.episode);
        },
        (error) => {
            console.log('bad');
        }



    );
    $(event.currentTarget).trigger('reset');
		// 	//getting modal div
    	// const modal = document.getElementsByClassName('modal');
		// 	//getting the open modal button
		// const modalBtn = document.getElementsByClassName('modalBtn')
		// 	//getting the close modal button
		// const closeBtn = document.getElementsByClassName('closeBtn')[0];
		// 	//adding event listener onto the open modal button
		// modalBtn.addEventListener('click', openModal);
		// 	//adding event listener onto the close modal button
		// closeBtn.addEventListener('click', closeModal);
		// 	//creating open modal function
		// const openModal = () => {
		// 	console.log(123);
		// 	modal.style.display ='block';
		// }
		// 	//creating close modal function
		// const closeModal = () =>{
		// 	modal.style.display ='none';
		// }



   });







})
