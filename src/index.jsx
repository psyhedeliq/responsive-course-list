import React from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';

const courseListRender = document.querySelector('#course-list-app');

const CourseListApp = () => {
  return (
    <div>
      <img src={logo} alt='Logo' />
      This is my Responsive Course List
    </div>
  );
};

render(<CourseListApp />, courseListRender);
