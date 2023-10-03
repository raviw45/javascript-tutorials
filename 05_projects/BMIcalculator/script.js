const form=document.querySelector("form");
// console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('.results');
    const reid=document.getElementById("rresult");
    const category=document.querySelector('.catresult');
    if(height=='' || height<0 || isNaN(height)){
        results.innerHTML=`Please provide the valid details`;
    }else if(weight=='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please provide the valid details`;
    }else{
         const bmi=(weight/((height*height)/10000)).toFixed(2);
         results.innerHTML=`BMI: ${bmi}`;
         reid.style.color='green';
        if(bmi<18.5){
              category.innerHTML='Your are Underweight';
        }else if(bmi>18.5 && bmi<=24.9){
            category.innerHTML='Your are in normal weight';
        }else if(bmi>25 && bmi<=29.9){
            category.innerHTML='Your are in overweight';
        }else{
            category.innerHTML='Your weight is very high';
        }
    }
})