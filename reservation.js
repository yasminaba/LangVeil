document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('serviceSelect');
    const dropdownNumber = document.getElementById('dropdownNumber');
    const expertSelect = document.getElementById('expertSelect');
  
    serviceSelect.addEventListener('change', function() {
      if (serviceSelect.value === 'Cours en Groupe') {
        dropdownNumber.style.display = 'block';
      } else {
        dropdownNumber.style.display = 'none';
      }

      const selectedService = serviceSelect.value;
      let selectedExperts; 

      switch (selectedService) {
        case 'Cours en Groupe':
            selectedExperts = ['Marie Dubois', 'Damien Martin', 'Noah Williams',
                'Jessica Smith', 'Teresa Ramirez', 'Alejandro Garcia', 'Elke Schneider',
                'Hans Neumann', 'Tao Zhang', 'Wei Lin']; 
            break;
        case 'Cours Particuliers':
            selectedExperts = ['Marie Dubois', 'Damien Martin', 'Noah Williams',
                'Jessica Smith', 'Teresa Ramirez', 'Alejandro Garcia', 'Elke Schneider',
                'Hans Neumann', 'Tao Zhang', 'Wei Lin']; 
            break;     
        case 'Cours en ligne':
            selectedExperts = ['Marie Dubois', 'Damien Martin', 'Noah Williams',
                'Jessica Smith', 'Teresa Ramirez', 'Alejandro Garcia', 'Elke Schneider',
                'Hans Neumann', 'Tao Zhang', 'Wei Lin']; 
            break;  
        case 'Cours en Réalité Virtuelle':
            selectedExperts = ['Marie Dubois', 'Damien Martin', 'Noah Williams',
                'Jessica Smith', 'Teresa Ramirez', 'Alejandro Garcia', 'Elke Schneider',
                'Hans Neumann', 'Tao Zhang', 'Wei Lin'];             
            break;  
        case 'Préparation aux Examens':
            selectedExperts = ['Damien Martin', 'Jessica Smith', 'Alejandro Garcia', 
                'Hans Neumann', 'Wei Lin']; 
            break;  
        case 'Consultation en Orientation':
            selectedExperts = ['Marie Dubois', 'Noah Williams', 'Teresa Ramirez', 
                'Elke Schneider', 'Tao Zhang'];             
            break;  
        case 'Traduction':
            selectedExperts = ['Eliza Robinson']; 
            break;  
        case 'Interprétation':
            selectedExperts = ['Liam Jackson']; 
            break;  
                        
        default:
            selectedExperts = [];
      }

      expertSelect.innerHTML = '';

    selectedExperts.forEach(function(expertName) {
        const option = document.createElement('option');
        option.text = expertName;
        expertSelect.add(option);
    });
  });
});
  
  