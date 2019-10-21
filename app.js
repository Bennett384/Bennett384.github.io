// console.log("Hi");
$(() =>{
    $('form').on('submit', (event) =>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();
    })





console.log($);

$.ajax({
            url:"https://api.openbrewerydb.org/breweries"
        }).then(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        )

        $('form').trigger('reset');

    });
