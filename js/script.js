$(document).ready(function () {

    /*
    jQuery method - use jQuery animate to modify css properties over a certain period
    */
    
    //function doBubbleThing() {
    
        $('#bubble').animate({
            top: '190px',
            left: '190px',
            height: '120px',
            width: '120px',
            'line-height': '110px',
            'border-width': '5px',
            'font-size': '22px',
            'border-radius': '60px',
            opacity: 1
        }, 1000)
        .animate({
            top: '200px',
            left: '200px',
            height: '100px',
            width: '100px',
            'line-height': '90px',
            'border-width': '5px',
            'font-size': '20px',
            'border-radius': '50px'
        }, 500);
        
    //}

    //doBubbleThing();
})
