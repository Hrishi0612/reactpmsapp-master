// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import MultipleColumnForm2 from './basicdetails'
import MultipleColumnForm1 from './addressdetails'
import MultipleColumnForm3 from './iddetails'
import MultipleColumnForm4 from './membershipdetails'
import MultipleColumnForm5 from './companydetails'


const BasicDetails = () => {
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <MultipleColumnForm2 />
        </Col>
        <Col sm='12'>
          <MultipleColumnForm1 />
        </Col>
        <Col sm='12'>
          <MultipleColumnForm3 />
        </Col>
        <Col sm='12'>
          <MultipleColumnForm4 />
        </Col>
        <Col sm='12'>
          <MultipleColumnForm5 />
        </Col>
      </Row>
    </Fragment>
    
  )
}
export default BasicDetails
