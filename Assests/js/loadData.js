$(document).ready(()=>{
    const productSection = $("#amazonDeals");

    function handleInfinteScroll(){
        if(window.innerHeight + window.pageYOffset + 300 >= document.body.getBoundingClientRect().height){
            //ajax call the server for the cards 
            //after getting the response as a set of cards in json format 
            //then we convert the json file into the object format and
            // we will make the specific card container from another function via passing objects
            //if the the response was a failure menas we had shown all the data then we call a function which will hide the loader from the screen depicting that we are out of cards
            ajaxRequest();
        }
    
    }
    
    function createTheProductCards(productData){
        const products = productData.data;
        for(let product in products){
            productSection.append(`
            <div class="product-card-container">
                <figure class="product-card-img">
                    <img src=${products[product].avatar} alt="" class="product-img">
                </figure>
                <div class="product-details">
                    <h2 class="product-header">
                        ${products[product].first_name}
                    </h2>
                    <div class="product-price">
                        <strong class="discounted-price">
                            ${products[product].id}&nbsp;&#x20B9;
                        </strong>
                        <div class="original-price">
                            200.00$
                        </div>
                        <div class="percentage-off">
                            14% off
                        </div>                   
                    </div>
                    <p class="product-defination">
                        ${products[product].last_name}                    
                    </p>
                    <a href=${products[product].email} class="product-anchor" target="_blank ">Read more</a>
                </div>
            </div>
        `);
        }
    }
    
    /*
        object structure
        {
            total:10,
            data:[
                {...}
                {...}
                {...}
                .
                .
                .
                {...}
            ]
        }
    
    */
    
    function ajaxRequest(){
        $.ajax({
            url:"https://reqres.in/api/users?page=1",
            type : 'GET',
            success : function(data){
                const productData = {
                    // size = responseTxt.total;  we gonna use total but at this instance we use perpage bcuz of demo url
                    size : data.per_page,
                    data : data.data,
                }
                createTheProductCards(productData);
            },
            error: ()=>{
                // alert('error data not found')
                console.log("data not found")
            }
        })
    }
    
    window.onload = ()=>{
        ajaxRequest();
    }
    window.addEventListener('scroll', handleInfinteScroll);
})
