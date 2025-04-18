import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Facilities from './Facilities';
import "./main.css"

const AccordianMain = ({ defaultExpandedIndex }) => {
  const [expandedIndex, setExpandedIndex] = useState(defaultExpandedIndex);

  useEffect(() => {
    setExpandedIndex(defaultExpandedIndex);
  }, [defaultExpandedIndex]);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="resources-main">
       <Accordion defaultActiveKey="-1">






       <Accordion.Item eventKey="4">
        <Accordion.Header><span className='res-header'>Facilities</span></Accordion.Header>
        <Accordion.Body>
         <Facilities/>
         <br/>
         <br/>
         <div className="res-acc-body-button"><a href="other">Other Facilities </a></div>


        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='res-header'>Departmental 
committee</span></Accordion.Header>
        <Accordion.Body>
        <div className="resource-body">
          <div className="resource-block">
            <div className="head9">DPGC </div>
            <ul>
              <li>Prof. Dhirendra Kumar Rai (Convener)</li>
              <li>Prof. Nishith Kumar Prasad</li>
              <li>Prof. Vivek Verma (HOD) (ex-officio) </li>
              <li>Prof. Dudekula Althaf Basha</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">DUGC</div>
            <ul>
              <li>Prof. Ramsajeevan Maurya (Convener)</li>
              <li>Prof. Hemant Borkar</li>
              <li>Prof. Sunil Kumar</li>
              <li>Prof. Ranjith K. Poobalan</li>
            </ul>
          </div>
          
          <div className="resource-block">
            {" "}
            <div className="head9">Library Committee </div>
            <ul>
              <li>Prof. Sumanta Samal (Convener)</li>
              <li>Prof. Abhijit Ghosh</li>
              <li>Prof. Khushubo Devi </li>
              <li>Prof. Rupesh S. Devan </li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Outreach Activities</div>
            <ul>
              <li>Prof. Nishith Kumar Prasad (Convener)</li>
              <li>Prof. Ranjith K. Poobalan</li>
              <li>Prof. K.V. Vamsi</li>
              <li>Prof. Khushubo Devi</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Placement & Industry Relations </div>
            <ul>
              <li>Prof. Vinod Kumar (Convener) </li>
              <li>Prof. Chandan Haldar</li>
              <li>Prof. Vivek Verma</li>
              <li>Prof. Eswar K. Prasad</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Annual Report and RTI </div>
            <ul>
              <li>Prof. Chandan Haldar (Convener)</li>
              <li>Prof. Vinod Kumar</li>
              <li>Prof. Sumanta Samal</li>
              <li>Prof. Ranjith K. Poobalan</li>
            </ul>
          </div>
          
          <div className="resource-block">
            <div className="head9">DFM Secretary </div>
            <ul>
              <li>Prof. Vivek Verma </li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">Alumni Relation </div>
            <ul>
              <li>Prof. Parasharam M Shirage (Convener)</li>
              <li>Prof. Vinod Kumar</li>
              <li>Prof. Sunil Kumar</li>
              <li>Prof. Khushubo Devi</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Departmental Common Facilities/Labs </div>
            <ul>
              <li>HOD (ex officio) (Convener) Prof. Sumanta Samal</li>
              <li>Prof. Hemant Borkar</li>
              <li>Prof. Dhirendra Kumar Rai</li>
              <li>Prof. Vivek Verma</li>
              <li>Prof. Ranjith K. Poobalan</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">SEM</div>
            <ul>
              <li>Prof. Ajay Kumar Kushwaha (Professor-Incharge)</li>
              <li>Prof. P. M. Shirage</li>
              <li>Prof. Dhirendra K. Rai</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">XRD</div>
            <ul>
              <li>Prof. Rupesh S. Devan (Professor-Incharge)</li>
              <li>Prof. Abhijit Ghosh</li>
              <li>Prof. Sunil Kumar</li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">Computational</div>
            <ul>
              <li>Prof. Chandan Haldar (Professor-Incharge)</li>
              <li>Prof. Sumanta Samal</li>
              <li>Prof. V.K. Vamsi</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">UTM</div>
            <ul>
              <li>Prof. Eswar Prasad (Professor-Incharge)</li>
              <li>Prof. Jayaprakash</li>
              <li>Prof. Abhijeet Gosh</li>
              <li>Prof. Santosh Hosmani</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">SPS</div>
            <ul>
              <li>Prof. Vinod Kumar (Professor-Incharge)</li>
              <li>Prof. Ram Sajeevan Maurya</li>
              <li>Prof. Sumanta Samal</li>
              <li>Prof. Sunil Kumar</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Website </div>
            <ul>
              <li>Prof. Venkata Vamsi (Convener)</li>
              <li>Prof. Chandan Haldar</li>
              <li>Prof. Nishith Kumar Prasad</li>
              <li>Prof. Abhijit Ghosh</li>
              <br />
              <li> 
              <b>Student representatives</b>   : 
                <br/> Mr. Priyanshu, Ms. Aditi, Pratik Prajn, Ansh Kyal
              </li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">Safety</div>
            <ul>
              <li>Prof. M. Dubey (Convener)</li>
              <li>Prof. Vinod Kumar</li>
              <li>Prof. Parasharam M Shirage</li>
              <li>Prof. Jayaprakash Murugesan</li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">Department Finance Advisory Committee</div>
            <ul>
              <li>HOD (ex officio) (Convener) Prof. Jayaprakash Murugesan</li>
              <li>Prof. D.A. Basha</li>
              <li>Prof. Eshwar K. Prasad</li>
            </ul>
          </div>




        </div>  
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='res-header'>Health And Safety</span></Accordion.Header>
        <Accordion.Body>
        The Health Centre of the Indian Institute of Technology Indore provides dedicated health services to the institute community comprising of students, employees, their dependents and Institute Guests. The Health Centre offers Outpatient, Day care, Trauma and Emergency Care.
        <div className="res-acc-body"> <a href="https://hostel.iiti.ac.in/"> click here to View the health and safety facilities</a></div> 

        </Accordion.Body>
      </Accordion.Item>







      <Accordion.Item eventKey="0">
        <Accordion.Header > <span className='res-header'>How to reach IIT Indore</span> </Accordion.Header>
        <Accordion.Body >
          <div class="box">
            <div class="image">
              <div class="info">
                <span class="journeyhead">BY TRAIN</span>
  <img src="https://cse.iiti.ac.in/images/image001.png" alt="" />
  <div class="direction">
  Indore Railway Station is approximately 24KM from IIT Indore campus.  Taxi (approximate INR 800) or Auto-ricksha (INR 400-500) and other public transport are available the from railway station to IIT Indore campus.  For public transport, shared taxi/Auto/bus can be taken from the railway station to Bhawarkuan Square (approximately 6-7km). Then take the BUS M-19 from Bhawarkuan Square (Khandwa Road) to IIT Indore GATE-1.</div></div>
  <div class="info">
  <span class="journeyhead">BY AIR</span>
    <img src="https://cse.iiti.ac.in/images/image003.png" alt="" />
    <div class="direction">
    Devi Ahilyabai Holkar International Airport has good air connectivity to major cities of India and also from UAE. The airport is approximately 32KM from IIT Indore campus. The pre-paid and post-paid taxi are available at airport for IIT Indore, the charges are approximate INR 900-1100.</div></div>

  <div class="info">
  <span class="journeyhead">BY BUS</span>
    <img src="https://cse.iiti.ac.in/images/image005.png" alt="" />
    <div class="direction">
    Indore is well connected with bus services from various parts of MP and other nearby states. There are several bus stops in Indore for interstate buses hence plan your stop such a way, that one can easily reach to Bhawarkuan Square (Khandwa Road), then take M-19 bus to IIT Indore campus.</div> </div>


            </div>
          </div>
         <div class="res-body-content d-flex align-items-center justify-content-center"><div className="res-acc-body">


          
          
           <a href="https://www.google.com/maps/dir//Indian+Institute+Of+Technology+(IIT),+Indore,+Khandwa+Rd,+Simrol,+Madhya+Pradesh+453552/@22.5252603,75.9169412,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962efcccbce7145:0x784e8cb69818596b!2m2!1d75.9207231!2d22.5203597?entry=ttu"> View On Map</a>
           <br />
           
           
           
           
           </div>
           <div class="res-acc-body">
           <a href="https://www.iiti.ac.in/"> College Website</a></div></div>
        
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='res-header'>Accomodation facilities in IITI</span></Accordion.Header>
        <Accordion.Body>IIT Indore is a residential Institute that mandates students of all teaching programs to stay in the Hostels. This is a home away from home where students develop lifelong relationships, camaraderie, and wonderful experiences that give them a different kind of grooming. Many of our alumni inform us that it is in these hostels where they learned life skills that are taking them a long way. At the moment, IIT Indore has six hostels, out of which one is reserved for female residents and other for married students. All hostels are located close to each other, lie amidst the flora and fauna of the campus and have adjacent playgrounds which are always buzzing with physical activity. These are also close to the Academic Pods, which houses all research and undergraduate labs, the backbone of this Institute.
        <div className="res-acc-body"> <a href="https://hostel.iiti.ac.in/"> click here to view the accommodation facilities</a></div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><span className='res-header'>Other Facilities</span></Accordion.Header>
        <Accordion.Body>
         
         
       <br /><span>&#8226;</span> Gravity-related apparatus
       <br />
       <br /><span>&#8226;</span> Thermal Conductivity Detector (TCD)
       <br />
       <br /><span>&#8226;</span> Microscopy and Imaging Apparatus
       <br />
       <br /><span>&#8226;</span> Young’s modulus apparatus
       <br />
       <br /><span>&#8226;</span> Parallelogram apparatus
       <br />
       <br /><span>&#8226;</span> Anderson Bridge
       <br />
       <br /><span>&#8226;</span> Triple beam balance
       <br />
       <br /><span>&#8226;</span> Ballistic Galvanometer
       <br />
       <br /><span>&#8226;</span> Centrifuge Machine
       <br />
       <br /><span>&#8226;</span> Resonance apparatus
       <br />


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default AccordianMain
