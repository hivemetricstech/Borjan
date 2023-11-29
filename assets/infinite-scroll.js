function loadproducts(){
var isSettingsObj = JSON.parse(isSettings);

Object.keys(isSettingsObj).forEach(function(key) {
  var elem = document.querySelector(isSettingsObj["container"]);
  if(key == 'path' && key.length > 0){
    var infScroll = new InfiniteScroll( elem, {
      path: isSettingsObj.path,
      append: isSettingsObj.append,
      history: false,
      hideNav: isSettingsObj.hideNav,
      status: isSettingsObj.status
    });
  }
});
}
loadproducts();
document.addEventListener('click', function(e){
    if (e.target != null && e.target.parentElement != null && e.target.parentElement.parentElement !=null ) { 
    var desktopFilter = e.target.classList.contains('collection-filters__sort') || e.target.classList.contains('filter-value') || e.target.classList.contains('facets-checkbox') || e.target.classList.contains('active-facets__button-inner');
    var mobileFilter = e.target.classList.contains('select__select') || e.target.classList.contains('mobile-facets__checkbox');
    var desktopFilterBtn = e.target.parentElement.classList.contains('underlined-link') && e.target.parentElement.parentElement.classList.contains('active-facets__button-wrapper');
    var mobileFilterBtn = e.target.classList.contains('underlined-link') && e.target.parentElement.classList.contains('mobile-facets__clear-wrapper');

    if(desktopFilter || mobileFilter || desktopFilterBtn || mobileFilterBtn){
      setTimeout(function (){
        loadproducts();
      },5000);
    }
    }
});