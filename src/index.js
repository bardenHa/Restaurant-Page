import './styles/style.scss';

//Remember to fix import method for library to optimise bundle size at the end!
import './libs/materialize/js/materialize.js';
import './libs/materialize/css/materialize.css';

document.addEventListener('DOMContentLoaded', function () {
    var modals = M.Modal.init(document.querySelectorAll('.modal'), {});
    var sidenav = M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
});

console.log('Testing...');