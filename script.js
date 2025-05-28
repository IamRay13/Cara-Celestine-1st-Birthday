document.addEventListener('DOMContentLoaded', function() {
 const toggleHeaders = document.querySelectorAll('.toggle-header');

 toggleHeaders.forEach(header => {
 header.addEventListener('click', function() {
 const content = this.nextElementSibling;
 const icon = this.querySelector('i');
 content.classList.toggle('open');
 icon.classList.toggle('fa-caret-down');
 icon.classList.toggle('fa-caret-up');
 });
 });
});
