// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import PackageDetails from './packagedetails'
import Attributes from './attributes'
import TransactionDetails from './transactiondetails'

const BasicDetails = () => {
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <PackageDetails />
        </Col>
        <Col sm='12'>
          <Attributes />
        </Col>
        <Col sm='12'>
          <TransactionDetails />
        </Col>
        {/* <Col sm='12'>
          <MultipleColumnForm4 />
        </Col>
        <Col sm='12'>
          <MultipleColumnForm5 />
        </Col> */}
      </Row>
    </Fragment>
    
  )
}
export default BasicDetails
