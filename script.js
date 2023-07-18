const radiobtn = document.querySelectorAll('.rating-form_input')
const submitbtn = document.querySelector('button')
const container = document.getElementById('container')
const feedback = document.getElementById('thank-you')
const rating = document.getElementById('user-rating')
let userRating = 0;

for(let i = 0;i < 5;i++)
{
  radiobtn[i].onclick = function(){
    submitbtn.disabled = false;
    userRating = this.value
  }
}
submitbtn.addEventListener('click',(event) => {
  event.preventDefault()
  container.style.display = 'none'
  feedback.style.display = 'block'
  rating.textContent = userRating
})