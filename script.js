document.getElementById('submit').addEventListener('click', function() {
    this.textContent = "Calculating..."; 
    this.disabled = true;

    setTimeout(() => {
        calculatePrice(); 
        this.textContent = "Calculate price";
        this.disabled = false; 
    }, 1000); 
});

function calculatePrice() {
    let basePrice = 100; 

    const education = document.getElementById('education').value;
    let educationCoeff = 1;
    if (education === 'bachelor') educationCoeff = 1.5;
    else if (education === 'college') educationCoeff = 1.2;
    else if (education === 'high_school') educationCoeff = 1.05;
    else if (education === 'middle_school') educationCoeff = 0.9;

    const networth = document.getElementById('networth').value;
    let networthCoeff = 1;
    if (networth === 'upper_class') networthCoeff = 2;
    else if (networth === 'middle_class') networthCoeff = 1.5;
    else if (networth === 'lower_class') networthCoeff = 1.2;

    const caste = document.querySelector('input[name="caste"]:checked')?.value;
    let casteBonus = 0;
    if (caste === 'brahmin') casteBonus = 100;
    else if (caste === 'kshatriya') casteBonus = 50;
    else if (caste === 'vaishya') casteBonus = 20;
    else if (caste === 'shudra') casteBonus = 10;
    else if (caste === 'untouchable') casteBonus = -50;

    let skillsBonus = 0;
    if (document.getElementById('musician').checked) skillsBonus += 10;
    if (document.getElementById('cook').checked) skillsBonus += 20;
    if (document.getElementById('easygoing').checked) skillsBonus += 15;
    if (document.getElementById('singer').checked) skillsBonus += 10;

    const age = document.querySelector('input[name="age"]:checked')?.value;
    let ageCoeff = 1;
    if (age === '18_23') ageCoeff = 1.5;
    else if (age === '24_27') ageCoeff = 1.2;
    else if (age === '28+') ageCoeff = 0.95;

    let reputationCoeff = 1;
    if (document.getElementById('gossip_parents').checked) reputationCoeff *= 0.85;
    if (document.getElementById('gossip_character').checked) reputationCoeff *= 0.9;
    if (document.getElementById('general_gossip').checked) basePrice -= 20;

    let finalPrice = ((basePrice * educationCoeff * networthCoeff + casteBonus)  + skillsBonus ) * ageCoeff * reputationCoeff ;

    document.getElementById('finalPrice').innerHTML = `Final Dowry Price: $${finalPrice.toFixed(2)}`;
    
}


