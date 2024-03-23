const Thememode = localStorage.getItem('theme');
const ThemeColorstyle = localStorage.getItem('color-theme');

document.documentElement.setAttribute('data-theme', Thememode);
document.documentElement.setAttribute('data-color-theme', ThemeColorstyle);

document.addEventListener('DOMContentLoaded', function() {
    const searchInputSettings = document.getElementById('search_settings');
    const clearButton = document.getElementById('clear-search-input');

    searchInputSettings.addEventListener('input', function() {
        if (searchInputSettings.value.trim() !== '') {
            clearButton.style.display = 'block';
        } else {
            clearButton.style.display = 'none';
        }
    });

    clearButton.addEventListener('click', function() {
        searchInputSettings.value = '';
        clearButton.style.display = 'none';
    });

   
});

