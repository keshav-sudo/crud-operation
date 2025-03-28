import { Button } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ FIXED
import Homepage from '../pages/Homepage';
import CreatePage from '../pages/CreatePage';
import Navbar from '../components/Navbar';

const App = () => {
  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
};

export default App;
