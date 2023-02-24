// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import MultipleColumnForm2 from './VerticalForm'
// import MultipleColumnForm1 from './HorizontalForm'

const FormLayouts = () => {
  return (
    <Fragment>
      <Row>
        {/* <Col  sm='12'>
          <MultipleColumnForm1 />
        </Col> */}
        <Col sm='12'>
          <MultipleColumnForm2 />
        </Col>
      </Row>
    </Fragment>
  )
}
export default FormLayouts
