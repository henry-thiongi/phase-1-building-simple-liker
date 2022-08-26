const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = {
  '♡':FULL_HEART,
  '♥':EMPTY_HEART
}
// Your JavaScript code goes here!
const like = document.querySelectorAll(' footer > ul > li > span')

console.log(like)
for (let i =0;i<like.length;i++){
  like[i].addEventListener('click',(e)=>{
    mimicServerCall()
    .then(success=>{
      alert(success)
      like[i].innerText = heart[like[i].innerText]

       })
    .catch(error => {
      document.querySelector('#modal').classList.remove()

      alert(error)
      setTimeout(()=>document.querySelector('#modal').classList.add('hidden'),3*1e3)
      })  //if you double click w/o check of server-alert
   })

}




