import React from 'react'
import { Table } from 'semantic-ui-react'

function Event(props){
  let startHour = props.event.startTime.split(':')[0]
  let fractionOfStartHour =  props.event.startTime.split(':')[1].replace('3', '5')
  let newStart = startHour + "." + fractionOfStartHour

  let endHour = props.event.endTime.split(':')[0]
  let fractionOfEndHour =  props.event.endTime.split(':')[1].replace('3', '5')
  let newEnd = endHour + "." + fractionOfEndHour

  let numRows = (parseFloat(newEnd) - parseFloat(newStart)) * 2

  return(
    <Table.Cell rowSpan={numRows} className='event'>
      {props.event.title}<br/>
      {props.event.location}
    </Table.Cell>
  )
}

export default Event
