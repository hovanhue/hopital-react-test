import React, { FC } from 'react';
import { useFacultyInfo } from '../hooks/useFacultyInfo';
import InternalMedicine from '../components/InternalMedicine';
import GeneralSurgery from '../components/GeneralSurgery';
import Obstetrics from '../components/Obstetrics';
import PediatricsDepartment from '../components/PediatricsDepartment';

export const Main: FC = () => {
  const facultyType = useFacultyInfo();

  const homeRender = {
    TYPE01: <InternalMedicine />,
    TYPE02: <GeneralSurgery />,
    TYPE03: <Obstetrics />,
    TYPE04: <PediatricsDepartment />,
  };
  return <div className='container-fluid'>{facultyType && homeRender[facultyType]}</div>;
};
