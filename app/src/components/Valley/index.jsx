import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import networks from '../../networks.json'


export default function Valley({ name, chain, description, image_uri }) {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
          alignItems: 'center',
        gap: '94px',
        mb: '44px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <img src={image_uri} width='504px' alt='valley' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
            color:"white"
        }}
      >
          <Box
              sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  mb: '32px'
              }}
          >
              <Avatar src={networks[chain].image} alt='chain'
                      sx={{
                          width: '56px',
                          height: '56px'
                      }}></Avatar>
              <Typography variant='body1' component='h2'
                          sx={{
                              fontFamily: "'Inter', sans-serif",
                              fontStyle: 'normal',
                              fontWeight: '600',
                              fontSize: '40px',
                              lineHeight: '48px',
                              textAlign: 'center',
                              letterSpacing: '0.01em',
                              color: 'white',
                          }}>
                  {name}
              </Typography>
          </Box>
        <Typography variant='h6' component='h3' sx={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '15px',
            lineHeight: '18px',
            letterSpacing: '0.01em',
            mb: '16px'
        }}>
          <span style={{fontWeight: '500', color: '#616572', marginRight: '8px'}}>Chain:</span>
            {networks[chain]?.params.chainName}
        </Typography>
        <Typography variant='subtitle2' component='p'
                    sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '15px',
                        lineHeight: '140%',
                        letterSpacing: '0.01em',
                        mb: '48px',
                        width: '423px'
                    }}>
          Description: {description}
        </Typography>
        <button
            className={'card__inner-btn'}
          style={{  width: '200px' }}
          onClick={() => navigate('/my-tokens')}
        >
          Travel to this valley
        </button>
      </Box>
    </Box>
  )
}
