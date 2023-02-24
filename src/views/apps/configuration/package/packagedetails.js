// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

export const PackageDetails = () => {
  return (
    <div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Package Details</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
          <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Package Code
              </Label>
              <Input type='text'  name='package' id='cityMulti' placeholder='Enter Package Code'>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                    Start Date             
             </Label>
              <Input type='date' name='date' id='nameMulti' placeholder='Select start date' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                End Date
              </Label>
              <Input type='date' name='date' id='lastNameMulti' placeholder='Select End Date' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Description
              </Label>
              <Input type='text' name='description' id='lastNameMulti' placeholder='Brief Description' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Expiry Date
              </Label>
              <Input type='date' name='guestid' id='lastNameMulti' placeholder='select expiry date' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Price
              </Label>
              <Input type='text' name='price' id='lastNameMulti' placeholder='Enter Price' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Status
              </Label>
              <Input type='select' name='status' id='lastNameMulti' placeholder='Select package status'>
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">InActive</option>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Calculation Rule
              </Label>
              <Input type='select' name='status' id='lastNameMulti' placeholder='Select Calculation Rule'>
              <option value="">Select Status</option>
              <option value="active">Flat Rate</option>
              <option value="inactive">Per Adult</option>
              <option value="inactive">Per Room</option>
              </Input>
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
export default PackageDetails