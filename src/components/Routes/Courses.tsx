import { useGetUsersAllCoursesQuery } from "../../Store/courses/coursesApi";
import React, { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard";
import Link from "next/link";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { it } from "node:test";
type Props = {};

const Courses = (props: Props) => {
  const { data, isLoading } = useGetUsersAllCoursesQuery({});
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    setCourses(data?.courses);
  }, [data]);


  return (
    <div>
      <div className={`w-[90%] 800px:w-[80%] m-auto`}>
        <h1 className="text-center text-[25px] py-5 leading-[35px] sm:text-2xl lg:text-3xl dark:text-white 800px:!leading-[60px] text-gray-800 font-[600] ">
          Popular Courses
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
          {data && isLoading === false &&
            courses?.map((item: any, index: number) => (
              <CourseCard item={item} key={index} />
            ))}

          {isLoading &&

            [0, 1, 2].map((i) => (
              <Box key={i} sx={{ pt: 0.5 }}>
                <Skeleton variant="rectangular" width={380} height={250} />
                <Skeleton width="86%" />
                <Skeleton width="86%" />
              </Box>
            ))

          }
        </div>
        {!isLoading && data &&
          <div className="w-full flex items-center justify-center">
            <Link className=" text-lg my-5  " href="courses"> View All</Link>
          </div>
        }

      </div>
    </div>
  );
};

export default Courses;
