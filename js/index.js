const linkElts = document.querySelector('ul.tabs-links');
const tabElts = document.querySelectorAll('.tabs > div');

linkElts.onclick = function onClick(event) {
    const value = parseInt(event.target.getAttribute('data-attr'))
    this.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
    // console.log(this); 
    document.querySelector('.tabs > div.active').classList.remove('active')
    // console.log(tabElts)
    tabElts[value].classList.add('active');
}
