import React, { useState, useEffect } from "react"
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleFilterNameChange = (event) => setFilterName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(reponse => {
      setPersons(reponse.data)
    })
  }, [])

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
