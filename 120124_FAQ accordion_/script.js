const inputs = document.querySelectorAll('input[name="accordion"]');
const labels = document.querySelectorAll('.label-icon');
console.log(labels, inputs);

function resetIcons(){
    labels.forEach(label=>{
        label.classList.remove('bg-iconMinus');
        label.classList.add('bg-iconPlus');
    })
}

inputs.forEach((input, idx)=>{
    input.addEventListener('change', function(){
        console.log('yeha');
        
        resetIcons();
        labels[idx].classList.remove('bg-iconPlus');
        labels[idx].classList.add('bg-iconMinus')
    })
})

