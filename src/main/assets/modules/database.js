//switches

function saveCheckboxState() {
    const checkboxes = document.querySelectorAll('.open-checkbox');
    checkboxes.forEach(function(checkbox) {
      localStorage.setItem(checkbox.name, checkbox.checked);
    });
  }

  function loadCheckboxState() {
    const checkboxes = document.querySelectorAll('.open-checkbox');
    checkboxes.forEach(function(checkbox) {
      const checked = localStorage.getItem(checkbox.name) === 'true';
      checkbox.checked = checked;
    });
  }

  window.addEventListener('load', loadCheckboxState);

  document.querySelectorAll('.open-checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('click', saveCheckboxState);
  });


  // get all checkboxes 

  