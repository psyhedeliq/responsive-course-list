import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { CourseList } from './course-list.component';

const courseDataInitial = {
  filter: {
    filterList: [],
    loading: false,
    selected: 0
  },
  course: {
    courseList: [],
    loading: false
  }
};

// reducer
const courseListReducer = (state = courseDataInitial, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: {
          ...state.filter,
          selected: action.selected
        }
      };
    case 'INIT_FILTER_LIST':
      return {
        ...state,
        filter: {
          loading: false,
          filterList: action.filterList,
          selected: 0
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

const updateFilterAction = selected => ({
  type: 'UPDATE_FILTER',
  selected
});

const CourseListContainer = () => {
  const [courseData, updateCourseData /* aka dispatch */] = useReducer(
    courseListReducer,
    courseDataInitial
  );
  console.log(courseData);

  const handleFilter = selected => {
    updateCourseData(updateFilterAction(selected));
  };

  useEffect(() => {
    (async () => {
      try {
        // const response = await axios.get('http://localhost:4444/course-list');
        // console.log(response);
        const { data } = await axios.get('http://localhost:4444/course-list');
        // console.log(data);
        const filterList = [
          'all courses',
          ...new Set(data.map(({ type }) => type))
        ];
        // console.log(filterList);
        // dispatch
        updateCourseData(initFilterListAction(filterList));
        updateCourseData(initCourseListAction(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <CourseList handleFilter={handleFilter} courseData={courseData} />;
};

export { CourseListContainer };
