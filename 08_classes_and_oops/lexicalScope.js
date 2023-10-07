function outer(){
    let username="ravi";
    function inner(){
        let secre="124"
        console.log(`${username} welcome`);
        console.log(secre);
    }
    function another(){
        let secre=23232;
        console.log(secre);
    }
    inner();
    another();
}
outer()