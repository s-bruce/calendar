import React from 'react'
import { Container, Table, Divider } from 'semantic-ui-react'
import Event from './Event.js'
import './App.css'

const EVENTS = [
  {startTime: '02:30', endTime: '04:00', title: 'Some Event', location: 'Some Location'},
  {startTime: '03:30', endTime: '04:30', title: 'Some Event2', location: 'Some Location2'},
  {startTime: '07:00', endTime: '07:30', title: 'Another Event', location: 'Another Location'}
]

function App() {
  function events(time){
    let eventEls =[]
    EVENTS.forEach(event => {
      if (event.startTime === time){
        eventEls.push(<Event event={event} />)
      }
    })
    return eventEls
  }
  
  return (
    <Container>
    <Divider hidden />
    <Table celled structured>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            12:00 AM
          </Table.Cell>
          {events('00:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            12:30 AM
          </Table.Cell>
          {events('00:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            1:00 AM
          </Table.Cell>
          {events('01:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            1:30 AM
          </Table.Cell>
          {events('01:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            2:00 AM
          </Table.Cell>
          {events('02:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            2:30 AM
          </Table.Cell>
          {events('02:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            3:00 AM
          </Table.Cell>
          {events('03:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            3:30 AM
          </Table.Cell>
          {events('03:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            4:00 AM
          </Table.Cell>
          {events('04:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            4:30 AM
          </Table.Cell>
          {events('04:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            5:00 AM
          </Table.Cell>
          {events('05:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            5:30 AM
          </Table.Cell>
          {events('05:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            6:00 AM
          </Table.Cell>
          {events('06:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            6:30 AM
          </Table.Cell>
          {events('06:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            7:00 AM
          </Table.Cell>
          {events('07:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            7:30 AM
          </Table.Cell>
          {events('07:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            8:00 AM
          </Table.Cell>
          {events('08:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            8:30 AM
          </Table.Cell>
          {events('08:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            9:00 AM
          </Table.Cell>
          {events('09:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            9:30 AM
          </Table.Cell>
          {events('09:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            10:00 AM
          </Table.Cell>
          {events('10:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            10:30 AM
          </Table.Cell>
          {events('10:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            11:00 AM
          </Table.Cell>
          {events('11:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            11:30 AM
          </Table.Cell>
          {events('11:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            12:00 PM
          </Table.Cell>
          {events('12:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            12:30 PM
          </Table.Cell>
          {events('12:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            1:00 PM
          </Table.Cell>
          {events('13:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            1:30 PM
          </Table.Cell>
          {events('13:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            2:00 PM
          </Table.Cell>
          {events('14:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            2:30 PM
          </Table.Cell>
          {events('14:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            3:00 PM
          </Table.Cell>
          {events('15:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            3:30 PM
          </Table.Cell>
          {events('15:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            4:00 PM
          </Table.Cell>
          {events('16:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            4:30 PM
          </Table.Cell>
          {events('16:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            5:00 PM
          </Table.Cell>
          {events('17:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            5:30 PM
          </Table.Cell>
          {events('17:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            6:00 PM
          </Table.Cell>
          {events('18:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            6:30 PM
          </Table.Cell>
          {events('18:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            7:00 PM
          </Table.Cell>
          {events('19:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            7:30 PM
          </Table.Cell>
          {events('19:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            8:00 PM
          </Table.Cell>
          {events('20:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            8:30 PM
          </Table.Cell>
          {events('20:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            9:00 PM
          </Table.Cell>
          {events('21:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            9:30 PM
          </Table.Cell>
          {events('21:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            10:00 PM
          </Table.Cell>
          {events('22:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            10:30 PM
          </Table.Cell>
          {events('22:30')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            11:00 PM
          </Table.Cell>
          {events('23:00')}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            11:30 PM
          </Table.Cell>
          {events('23:30')}
        </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  )
}

export default App
