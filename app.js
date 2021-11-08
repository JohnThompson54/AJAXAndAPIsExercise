// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
const stringJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a, b, c
console.log(stringJSON);
const jokeJS1 = JSON.parse(stringJSON);
console.log(jokeJS1);
p1.innerHTML = jokeJS1.setup
p2.innerHTML = jokeJS1.punchline


// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
.then(res => {
    console.log(`Axios Example 1 was Successful`);
    console.log(res);
    console.log(res.data);
    console.log(res.data.character);
    console.log(res.data.quote);
    p3.innerHTML = res.data.character
    p4.innerHTML = res.data.quote
})
.catch(err => {
    console.log(`Rejected`);
    console.log(err);
});



// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);