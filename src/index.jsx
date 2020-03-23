import React from 'react';
import { render } from 'react-dom';
import { CourseListApp } from './component/app';
import './index.css';

const courseListRender = document.querySelector('#course-list-app');

render(<CourseListApp />, courseListRender);
