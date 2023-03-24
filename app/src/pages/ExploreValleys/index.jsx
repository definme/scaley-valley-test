import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Valley from '../../components/Valley'
import { getValleys } from '../../api'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ExploreValleys() {
  const [valleys, setValleys] = useState([])

  function getAllValleys() {
    getValleys()
      .then(res => {
        setValleys(res)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getAllValleys()
  }, [])

  return (
    <Box>
        <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '40px',
              lineHeight: '48px',
              textAlign: 'center',
              letterSpacing: '0.01em',
              color: 'white',
              marginTop: '135px',
            }}
        >
            Explore the valleys
        </Typography>
        <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '15px',
              lineHeight: '18px',
              textAlign: 'center',
              letterSpacing: '0.01em',
              margin: '12px 0 68px 0',
              color: '#616572',
            }}
        >
            You can choose one to travel to this valley
        </Typography>
      <Box>
        {valleys.map((valley, idx) => (
            <Valley key={idx} {...valley} />
        ))}
      </Box>

    </Box>
  )
}

export default ExploreValleys
