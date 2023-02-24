// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

export const MultipleColumnForm5 = () => {
  return (
    <div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Company Details</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
          <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Guest Profile Id
              </Label>
              <Input type='text' name='membership' id='cityMulti' placeholder='Enter guest profile ID'>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                    Company ID            
             </Label>
              <Input type='text' name='place' id='nameMulti' placeholder='Enter company id' />
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
export default MultipleColumnForm5