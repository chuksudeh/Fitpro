module.exports = (req, res) =>{
const {age, weight} = req.body
 if(age < 40 && weight < 60){
     document.getElementById('brost').innerHTML = "Hello you are overweight"
 }
     else document.getElementById('brost').innerHTML = "Hello you are too light"
}