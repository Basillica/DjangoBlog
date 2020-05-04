const titleInput = document.querySelector('input[name=title]')
const slugInput = document.querySelector('input[name=slug]')

const slugify = (val) => {
  return val.toString().toLowerCase().trim()
  .replace(/&/g, '-and-')
  .replace(/[\s\W-]+/g,'-') //replaces spaces, and non word chars and dashed with single dash
}

titleInput.addEventListener('keyup',(e) => {
  slugInput.setAttribute('value', slugify(titleInput.value))
})
