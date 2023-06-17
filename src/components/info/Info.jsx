import React from 'react'
import Row from '../common/Row'
import InfoImage from './InfoImage'
import InfoTxt from './InfoTxt'

const Info = () => {
  return (
    <Row className="w-3/4 m-auto">
      <InfoImage/>
      <InfoTxt/>
    </Row>
  )
}

export default Info
