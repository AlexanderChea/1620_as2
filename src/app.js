const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

// Creating Note taking area

let addButton = document.querySelector('i')

let writingArea = document.querySelector('.write-note-area')

let textarea = "<textarea id='note-textarea'></textarea> <button id='save'>Save</button> <button id='cancel_note'>Cancel</button>"

function addnote(evt) {
  writingArea.insertAdjacentHTML('afterbegin', textarea)
  let cancel_button = document.querySelector('#cancel_note')
  let save =  document.querySelector('#save')
  cancel_button.addEventListener('click', remove_Note)
  save.addEventListener('click', saveNote)
}

addButton.addEventListener('click', addnote)