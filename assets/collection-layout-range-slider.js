function productGridContainerClasses () {
  const rangeInput = document.getElementById('myRange');
  const rangeInputMobile = document.getElementById('myRangemobile');
  const productGrid = document.querySelector('#ProductGridContainer #product-grid');
  
  function updateGridClasses() {
    var desktopValue = rangeInput.value;
    var mobileValue = rangeInputMobile.value;
  
    productGrid.classList.remove(
      'grid--2-col-desktop',
      'grid--3-col-desktop',
      'grid--4-col-desktop',
      'grid--5-col-desktop',
      'grid--6-col-desktop',
      'grid--1-col-tablet-down',
      'grid--2-col-tablet-down'
    );
  
    if (desktopValue === '2') {
      productGrid.classList.add('grid--2-col-desktop');
    } else if (desktopValue === '3') {
      productGrid.classList.add('grid--3-col-desktop');
    } else if (desktopValue === '4') {
      productGrid.classList.add('grid--4-col-desktop');
    } else if (desktopValue === '5') {
      productGrid.classList.add('grid--5-col-desktop');
    } else if (desktopValue === '6') {
      productGrid.classList.add('grid--6-col-desktop');
    }
  
    if (mobileValue === '1') {
      productGrid.classList.add('grid--1-col-tablet-down');
    } else if (mobileValue === '2') {
      productGrid.classList.add('grid--2-col-tablet-down');
    }
  }

  rangeInput.addEventListener('input', function() {
    updateGridClasses();
  });
  
  rangeInputMobile.addEventListener('input', function() {
    updateGridClasses();
  });

  updateGridClasses();
}

productGridContainerClasses();