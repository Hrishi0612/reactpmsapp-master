// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

export const TransactionDetails = () => {
  return (
    <div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Transaction Details</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
          <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Transaction Code
              </Label>
              <Input type='select'  name='transaction' id='cityMulti' placeholder='select transaction Code'>
              <option value="">Select Code</option>
              <option value="active">1001</option>
              <option value="inactive">1002</option>
              <option value="inactive">1003</option>
              <option value="inactive">1004</option>
              <option value="inactive">1005</option>
              <option value="inactive">2002</option>
              <option value="inactive">2004</option>
              <option value="inactive">2005</option>
              <option value="inactive">4002</option>
              <option value="inactive">4003</option>
              <option value="inactive">4004</option>
              <option value="inactive">4005</option>
              <option value="inactive">9005</option>
              <option value="inactive">9006</option>
              <option value="inactive">9007</option>
              <option value="inactive">9008</option>
              <option value="inactive">9009</option>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                    Currency             
             </Label>
              <Input type='text' name='rate' id='nameMulti' placeholder='Enter Currency' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Transaction Description
              </Label>
              <Input type='text' name='text' id='lastNameMulti' placeholder='Enter Description' />
            </Col>
            <Col md='6' sm='12' className='mb-1'><br></br><br></br>
            <Input type='checkbox' id='basic-cb-checked' />
              <Label for='basic-cb-checked' className='form-check-label'>
              &emsp;Tax Inclusive
              </Label>
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
export default TransactionDetails