import React from 'react'
import FilterSort from '../components/FilterSort'
import MusicRecords from './MusicRecords'
import styled from "styled-component"

const Homepage = () => {
  return (
    <div>
      <HomepageWraper>
        <FilterWraper>
          <FilterSort />
        </FilterWraper>
        <MusicWraper>
          <MusicRecords />
        </MusicWraper>
      </HomepageWraper>
    </div>
  );
}

export default Homepage


const HomepageWraper = styled.div`
 display: flex;
 height: 100vh;
`;

const FilterWraper = styled.div`
width:200vh;
border:1px solid red;
`;
const MusicWraper = styled.div`
  width: 100%;
  border: 1px solid green;
`;