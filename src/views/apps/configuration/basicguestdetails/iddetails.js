// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

export const MultipleColumnForm3 = () => {
  return (
    <div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Id Details</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
          <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Id Type
              </Label>
              <Input type='select'  name='salutation' id='cityMulti' placeholder='Select Id Type'>
                <option value=''>Select ID Type</option>
                <option value='passport'>Passport</option>
                <option value='visa'>Visa</option>
                <option value='aadharcard'>Aadhar Card</option>

                </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                    Issue Place             
             </Label>
              <Input type='text' name='place' id='nameMulti' placeholder='Enter issue place' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Upload ID File
              </Label>
              <Input type='file' name='name' id='lastNameMulti' placeholder='Upload file' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Issue Date
              </Label>
              <Input type='date' name='guestid' id='lastNameMulti' placeholder='select issue date' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Expiry Date
              </Label>
              <Input type='date' name='guestid' id='lastNameMulti' placeholder='select expiry date' />
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
export default MultipleColumnForm3