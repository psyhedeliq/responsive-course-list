import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const courseDataInitial = {
  filter: {
    filterList: [],
    loading: false
  },
  course: {
    courseList: [],
    loading: false
  }
};

// reducer
const courseListReducer = (state = courseDataInitial, action) => {
  switch (action.type) {
    case 'INIT_FILTER_LIST':
      return {
        ...state,
        filter: {
          loading: false,
          filterList: action.filterList
        }
      };
    case 'INIT_COURSE_LIST':
      return {
        ...state,
        course: {
          loading: false,
          courseList: action.data
        }
      };
    default:
      return state;
  }
};

const initCourseListAction = data => ({
  type: 'INIT_COURSE_LIST',
  data
});

const initFilterListAction = filterList => ({
  type: 'INIT_FILTER_LIST',
  filterList
});

const CourseListContainer = () => {
  const [courseData, updateCourseData /* aka dispatch */] = useReducer(
    courseListReducer,
    courseDataInitial
  );
  console.log(courseData);

  useEffect(() => {
    (async () => {
      try {
        // const response = await axios.get('http://localhost:4444/course-list');
        // console.log(response);
        const { data } = await axios.get('http://localhost:4444/course-list');
        // console.log(data);
        const filterList = [...new Set(data.map(({ type }) => type))];
        // console.log(filterList);
        // dispatch
        updateCourseData(initFilterListAction(filterList));
        updateCourseData(initCourseListAction(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Course List</h1>
      <div>
        {courseData.filter.loading ? (
          <div>Waiting for filters ...</div>
        ) : (
          courseData.filter.filterList.map(filter => <div>{filter}</div>)
        )}
      </div>
      <div>
        {courseData.course.loading ? (
          <div>Loading courses ...</div>
        ) : (
          courseData.course.courseList.map(course => <div>{course.title}</div>)
        )}
      </div>
    </div>
  );
};

export { CourseListContainer };
