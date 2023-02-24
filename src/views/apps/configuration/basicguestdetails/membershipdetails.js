// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

export const MultipleColumnForm4 = () => {
  return (
    <div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Membership Details</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
          <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Membership Id 
              </Label>
              <Input type='text' name='membership' id='cityMulti' placeholder='Enter Membership ID'>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                   Name On Card            
             </Label>
              <Input type='text' name='place' id='nameMulti' placeholder='Enter name' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Start Date
              </Label>
              <Input type='date' name='guestid' id='lastNameMulti' placeholder='select start date' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                End Date
              </Label>
              <Input type='date' name='guestid' id='lastNameMulti' placeholder='select end date' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                   Membership Level ID            
             </Label>
              <Input type='text' name='place' id='nameMulti' placeholder='Enter memebershiplevel ID' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
              Membership Type ID           
             </Label>
              <Input type='text' name='place' id='nameMulti' placeholder='Enter memebershiptype ID' />
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
export default MultipleColumnForm4