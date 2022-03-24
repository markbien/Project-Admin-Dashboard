const sidebar = document.querySelector('.sidebar');
const dashboard = sidebar.querySelector('.sticky')

dashboard.style.width = sidebar.clientWidth + 'px';

window.addEventListener('resize', ()=> {
    dashboard.style.width = sidebar.clientWidth + 'px';
});