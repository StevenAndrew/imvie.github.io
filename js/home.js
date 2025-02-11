var hiddenDivIntDesign = document.getElementById('IntDesignContent');
var hiddenDivContractor = document.getElementById('ContractorContent');
var hiddenDivArchitecture = document.getElementById('ArchitectureContent');

document.getElementById('IntDesign').addEventListener('click', function() {
    hiddenDivIntDesign.classList.add('visible');
    hiddenDivContractor.classList.remove('visible');
    hiddenDivArchitecture.classList.remove('visible');
    document.getElementById("hiddenContent").scrollIntoView({behavior: 'smooth'});
});

document.getElementById('Contractor').addEventListener('click', function() {
    hiddenDivIntDesign.classList.remove('visible');
    hiddenDivContractor.classList.add('visible');
    hiddenDivArchitecture.classList.remove('visible');
    document.getElementById("hiddenContent").scrollIntoView({behavior: 'smooth'});
});

document.getElementById('Architecture').addEventListener('click', function() {
    hiddenDivIntDesign.classList.remove('visible');
    hiddenDivContractor.classList.remove('visible');
    hiddenDivArchitecture.classList.add('visible');
    document.getElementById("hiddenContent").scrollIntoView({behavior: 'smooth'});
});
