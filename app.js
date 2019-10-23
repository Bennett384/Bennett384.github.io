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

    	const modal = document.getElementById('modal');

		const modalBtn = document.getElementById('modalBtn')

		const closeBtn = document.getElementById('closeBtn')

		modalBtn.addEventListener('click', openModal);

		const openModal = () => {
			console.log(123);
			// modal.style.display ='block';
		}



   });







})


 
