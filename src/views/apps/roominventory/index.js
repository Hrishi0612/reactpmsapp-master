// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

const MultipleColumnForm = () => {
  return (
    <div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Source Group</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Hotel ID
              </Label>
              <Input type='text' name='hotelid' id='nameMulti' placeholder='Enter hotel ID' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Source Group
              </Label>
              <Input type='text' name='sourcegroup' id='lastNameMulti' placeholder='Enter source group' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Description
              </Label>
              <Input type='text' name='description' id='cityMulti' placeholder='Describe source code' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                Active Status
              </Label>
              <Input type='text' name='activestatus' id='CountryMulti' placeholder='Activity status' />
            </Col>
            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button>
                <Button outline color='secondary' type='reset'>
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
    </div>
  )
}
export default MultipleColumnForm
