import React from 'react'
import { Table } from 'semantic-ui-react'

function Event(props){
  let numRows = (parseFloat(props.event.endTime.replace(':', '.')) - parseFloat(props.event.startTime.replace(':', '.').replace('3', '5'))) * 2
  console.log(numRows)

  return(
    <Table.Cell rowSpan={numRows} className='event'>
      {props.event.title}<br/>
      {props.event.location}
    </Table.Cell>
  )
}

export default Event
