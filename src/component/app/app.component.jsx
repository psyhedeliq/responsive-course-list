import React from 'react';
import { Header } from '../header';
import { Welcome } from '../welcome';
import { StyledCourseListApp } from './app.style';

const CourseListApp = () => {
  return (
    <StyledCourseListApp>
      <Header />
      <Welcome />
    </StyledCourseListApp>
  );
};

export { CourseListApp };
