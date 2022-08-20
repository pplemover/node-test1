console.log("Hello world!");

// figlet 모듈
var figlet = require('figlet');

figlet('Hello Jason!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

// express 모듈
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  res.send('강아지')
})

app.get('/cat', function (req, res) {
  res.send('고양이')
})

// GET방식 파라미터 연습
app.get('/a/:id', function (req, res) {
  const q = req.params //요청 들어온 것중 .params라는 값을 가져와서 q 변수에 담는다
  console.log(q) //브라우저에 localhost:3000/user/jocoding이라고 입력하면 q에 jocoding이 들어온다. 
})

app.get('/b/:animal', function (req, res) {
  const q = req.params 
  console.log(q.animal) 

  res.json({'animal': q.animal}) //브라우저 화면에 출력 
})

// GET방식 query연습
app.get('/c/:insect', function (req, res) {
  const q = req.query
  console.log(q.q)
  console.log(q.height)
  console.log(q.weight)

  res.json({'id' : q.q, '높이': q.height, '무게' : q.weight})
})

// 동물소리 API 만들기
app.get('/sound/:name', function (req, res) {
  const { name } = req.params   // p.name 할 필요가 없는 것. 
  console.log(name) //콘솔창에 dog가 출력된다.

  if(name == "dog"){
    res.send('멍멍')
  } else if(name == "cat"){
    res.send('야옹')
  } else if(name == "pig"){
    res.send('꿀꿀')
  } else {
    res.json('알수없음')
  }
})

app.listen(3000)
