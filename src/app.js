const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

// Creating Note taking area

let addbutton = document.querySelector('i')

let writingarea = document.querySelector('.write-note-area')

let textarea = "<textarea id='note-textarea'></textarea> <button id='save'>Save</button> <button id='cancel_note'>Cancel</button>"

function addnote(evt) {
  writingarea.insertAdjacentHTML('afterbegin', textarea)
  let cancelbutton = document.querySelector('#cancel_note')
  let save = document.querySelector('#save')
  cancelbutton.addEventListener('click', remove_Note)
  save.addEventListener('click', saveNote)
}

addbutton.addEventListener('click', addnote)


//Creating cancel button 

function remove_note(evt){
  while (writingarea.firstChild){
    writingarea.removeChild(writingarea.firstChild)
  }
}