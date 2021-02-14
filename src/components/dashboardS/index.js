import React from "react";
import { Table, Row, Col } from 'antd';
import {courseDetails} from '../../constants';

function DashboardS() {

  const EnrollClick = () =>{
    alert('Enrolled Successfully!');
  }

  const columns = [
    {
      title: 'Course Name',
      dataIndex: 'courseName',
      key: 'courseName',
      filters: [
        {
          text: 'Web Development',
          value: 'Web Development',
        },
        {
          text: 'Mobile Development',
          value: 'Mobile Development',
        },
        {
          text: 'Cloud Development',
          value: 'Cloud Development',
        }
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.courseName.indexOf(value) === 0
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate'
    },
    {
      title: 'Seats Available',
      dataIndex: 'seatsAvailable',
      key: 'seatsAvailable'
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration'
    },
    {
      title: 'Credits',
      dataIndex: 'credits',
      key: 'credits',
      filters: [
        {
          text: '4',
          value: '4',
        },
        {
          text: '3',
          value: '3',
        }
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.credits.indexOf(value) === 0
    }, 
    {
      title: 'Lecturer',
      dataIndex: 'lecturerName',
      key: 'lecturerName'
    },
    {
      title: 'Enrolled',
      dataIndex: 'enrolled',
      key: 'enrolled',
      filters: [
        {
          text: 'Yes',
          value: "Yes",
        },
        {
          text: 'No',
          value: "No",
        }
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.enrolled.indexOf(value) === 0,
    },
    {
      title: 'Enroll',
      dataIndex: 'enroll',
      key: 'enroll',
      render: () => <a id='enrollClick' onClick={EnrollClick}>Enroll</a>
    }
  ];

  return (
    <div>
        <Row justify={'center'}>
            <Col>
              <h1>Student Dashboard</h1> 
            </Col>
        </Row>
        <Row justify={'center'}>
            <Col>
              <h1>Course Catalogue</h1> 
              <Table pagination={false} dataSource={courseDetails} columns={columns} 
              expandedRowRender={record => <p>{record.courseDescription}</p>} /> 
            </Col>
        </Row>

    </div>
  );
  
}

export default DashboardS;