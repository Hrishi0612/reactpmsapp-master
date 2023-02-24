// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

export const Attributes = () => {
  return (
    <div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Attributes</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
          <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Posting Rhythm
              </Label>
              <Input type='select'  name='rhythm' id='cityMulti' placeholder='Select....'>
                <option value="">Select Rhythm type</option>
                <option value="active">Post Every Night</option>
                <option value="inactive">Post on Arrival Night</option>
                <option value="inactive">Post on Every X Night Starting Y Night</option>
                <option value="inactive">Post on Certain Nights of the week</option>
                <option value="inactive">Post on Last Night</option>
                <option value="inactive">Post Every Night Except Arrival Night</option>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                    Rate Inclusion             
             </Label><br></br><br></br>
              <Input type='radio' name='date' id='nameMulti' placeholder='' />
              <label>&emsp;Included in rate</label><br></br><br></br>
              
              <Input type='radio' name='date' id='nameMulti' placeholder='' />
              <label>&emsp;Add rate separate line</label>
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
export default Attributes