// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

 const MultipleColumnForm2 = () => {
  return (
    <div>
    <Card>
    <CardHeader>
        <CardTitle tag='h4'>Address Details</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
          <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Country
              </Label>
              <Input type='text' name='country' id='cityMulti' placeholder='Select Country' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Nationality
              </Label>
              <Input type='text' name='nationality' id='nameMulti' placeholder='Select Natinality' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                State
              </Label>
              <Input type='text' name='state' id='lastNameMulti' placeholder='Select state' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                City
              </Label>
              <Input type='text' name='city' id='lastNameMulti' placeholder='Select city' />
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
    <Card>
    <CardHeader>
        <CardTitle tag='h4'>Address Details</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
          <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Country
              </Label>
              <Input type='text' name='country' id='cityMulti' placeholder='Select Country' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Nationality
              </Label>
              <Input type='text' name='nationality' id='nameMulti' placeholder='Select Natinality' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                State
              </Label>
              <Input type='text' name='state' id='lastNameMulti' placeholder='Select state' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                City
              </Label>
              <Input type='text' name='city' id='lastNameMulti' placeholder='Select city' />
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
export default MultipleColumnForm2