import React, { useState } from "react";
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { Id:1, name: 'Arto Hellas', number: '040-123456' },
    { Id:2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { Id:3, name: 'Dan Abramov', number: '12-43-234345' },
    { Id:4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleFilterNameChange = (event) => setFilterName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const addContact = (event)=>{
    event.preventDefault()
    if(persons.some(contact => contact.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const personObject = {
        Id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      setFilterName('')
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} onChangeFilter={handleFilterNameChange} />
      <h2>add a new</h2>
      <PersonForm submitFunction={addContact}  newName={newName} onChangeName={handleNameChange} newNumber={newNumber} onChangeNumber={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons filterContacts={filterName.length > 0 ? persons.filter(person => person.name.includes(filterName)) : persons}/>
    </div>
  )
}

export default App;
