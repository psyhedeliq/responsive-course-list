import React from 'react';
import { Header } from '../header';
import { Welcome } from '../welcome';
import { StyledCourseListApp } from './app.style';
import { CourseListContainer } from '../course-list';

const CourseListApp = () => {
  return (
    <StyledCourseListApp>
      <Header />
      <Welcome />
      <CourseListContainer />
    </StyledCourseListApp>
  );
};

export { CourseListApp };
