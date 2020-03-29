import React from 'react';
import { Button } from '../button';

const CourseList = ({ courseData, handleFilter }) => {
  return (
    <div>
      <h1>Course List</h1>
      <div>
        {courseData.filter.loading ? (
          <div>Waiting for filters ...</div>
        ) : (
          courseData.filter.filterList.map((filter, key) => {
            return (
              <Button
                onClick={() => handleFilter(key)}
                category='secondary'
                selected={key === courseData.filter.selected}
                key={key}
              >
                {filter}
              </Button>
            );
          })
        )}
      </div>
      <div>
        {courseData.course.loading ? (
          <div>Loading courses ...</div>
        ) : (
          courseData.course.courseList
            .filter(course =>
              courseData.filter.selected
                ? course.type ===
                  courseData.filter.filterList[courseData.filter.selected]
                : true
            )
            .map(course => (
              <div>
                ({course.type}){course.title}
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export { CourseList };
