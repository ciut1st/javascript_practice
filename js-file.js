const container = document.querySelector('.container')

// <p>
const paragraph = document.createElement('p')
paragraph.style.color = 'red'
paragraph.textContent = "Hey I'm red!"

container.appendChild(paragraph)

// <h3>
const h3 = document.createElement('h3')
h3.style.color = 'blue'
h3.textContent = "I'm a blue h3!"

container.appendChild(h3)

// <div>
const div = document.createElement('div')
div.style.borderColor = 'black'
div.style.backgroundColor = 'pink'

    // <h1>
    const h1 = document.createElement('h1')
    h1.textContent = "I'm in a div"

    div.appendChild(h1)

    // <p>
    const p = document.createElement('p')
    p.textContent = "ME TOO!"

    div.appendChild(p)

container.appendChild(div)


// Event
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});