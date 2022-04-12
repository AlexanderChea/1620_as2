const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

// Creating Note taking area

let add_button = document.querySelector('i')

let writing_area = document.querySelector('.write-note-area')

let text_area = "<textarea id='note-textarea'></textarea> <button id='save'>Save</button> <button id='cancel_note'>Cancel</button>"

function addnote(evt) {

  writing_area.insertAdjacentHTML('afterbegin', text_area)
  let cancel_button = document.querySelector('#cancel_note')
  let save = document.querySelector('#save')
  cancel_button.addEventListener('click', remove_Note)
  save.addEventListener('click', saveNote)
}

add_button.addEventListener('click', addnote)


//Creating cancel button 

function remove_note(evt){
  while (writing_area.firstChild){
    writing_area.removeChild(writing_area.firstChild)
  }
}

//Creating save button

let list_of_notes = document.querySelector('.notes-list')

function save_note(evt){

  let text_area = document.querySelector('textarea')

  array_of_lines = text_area.value.split('\n')
  title_of_note = array_of_lines.shift()
  notes.push({title: note_title, noteBody: array_of_lines, id:notes.length +1})
  console.log(notes)
  display_sidenav(note_title, array_of_lines)
  remove_note(evt)
}

//Displaying the side nav 
function display_sidenav(title, body){
  let list_title = document.createElement('li')
  let list_para = document.createElement('p')

  list_para.innerText = title
  list_title.appendChild(list_para)
  notes_list.appendChild(list_title)
  list_title.addEventListener('click', () =>{
    read_note(list_title, body)
  })
}

//Creating the reading a note section

let reading_area = document.querySelector('.read-note-area')

function read_note(evt, body){

  let note_div = document.createElement('div')

  let note_para = document.createElement('p')

  let close_button = document.createElement('button')
  close_button.innerHTML = 'X'
  close_button.className='close_button'
  note_para.innerHTML = body
  reading_area.appendChild(note_div)
  note_div.appendChild(note_para)
  note_div.appendChild(close_button)
  close_button.addEventListener('click', () => {close_btn.parentElement.remove()})
}