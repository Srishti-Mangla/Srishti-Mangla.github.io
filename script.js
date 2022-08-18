// Message-Send-Status-Confirm-Alert
function confirmAlert(){
    if(confirm("Click OK to Send Message.")){
        alert("Message sent successfully.");
    }else{
        alert("You cancelled the message.");
    }
}

// Back-to-Top-Button
function topFunction(){
    document.documentElement.scrollTop=0;
}