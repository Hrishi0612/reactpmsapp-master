// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

 const MultipleColumnForm2 = () => {
  return (
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
              <Input type='select' name='country' id='cityMulti' placeholder='Select Country'>
                <option value=''>Select Country</option>
                <option value='india'>India</option>
                <option value='australia'>Australia</option>
                <option value='canada'>Canada</option>
                <option value='America'>America</option>
                <option value='germany'>Germany</option>
                <option value='france'>France</option>
                <option value='brazil'>Brazil</option>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Nationality
              </Label>
              <Input type='select' name='nationality' id='nameMulti' placeholder='Select Natinality'>
                <option value=''>Select Nationality</option>
                <option value='india'>India</option>
                <option value='australia'>Foriegn</option>
              </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                State
              </Label>
              <Input type='select' name='state' id='lastNameMulti' placeholder='Select state'>
                <option value="">Select States from the list</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
    </Input>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                City
              </Label>
              <Input type='text' name='city' id='lastNameMulti' placeholder='Select city' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Postal Code
              </Label>
              <Input type='text' name='postalcode' id='lastNameMulti' placeholder='Enter Postal Code' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                GSTID
              </Label>
              <Input type='text' name='gstid' id='lastNameMulti' placeholder='Enter GST Number' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Phone Number
              </Label>
              <Input type='text' name='phnumber' id='lastNameMulti' placeholder='Enter Phone Number' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Email
              </Label>
              <Input type='text' name='email' id='lastNameMulti' placeholder='Enter Email ID' />
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
  )
} 
export default MultipleColumnForm2