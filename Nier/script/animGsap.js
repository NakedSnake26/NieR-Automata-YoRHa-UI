let btnGroup = document.querySelector('.wrap__column');
let buttons = document.querySelectorAll('.button');
let title = document.querySelector('h2');

function splitText(textEl) {
  if(!textEl || !textEl.innerHTML) {
    return
  }

  let text = textEl.innerHTML.split('');
  textEl.innerHTML = '';
  text.forEach((letter) => {
    let span = document.createElement('span');
    span.innerHTML = letter;
    textEl.appendChild(span);
  });
}

splitText(title);

gsap.to(btnGroup, {
  opacity: 1,
  delay: 0,
  duration: .1
});

buttons.forEach((button, i) => {
  gsap.to(button, {
    x: 0,
    opacity: 1,
    delay: 0 + (.055 * i),
    duration: 0.25
  });
});

let headingLetters = title.querySelectorAll('span');
headingLetters.forEach((letter, i) => {
  gsap.to(letter, {
    opacity: 1,
    delay: 0 + (.055 * i),
    duration: .1
  });
});
