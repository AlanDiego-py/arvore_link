import {Button, colors, Stack} from '@mui/material'
import {GitHub, LinkedIn, Instagram, YouTube } from '@mui/icons-material'

const LinkTree = () => {
    const links = [
        {icon: <GitHub />, label: 'GitHub', url:'https://github.com/AlanDiego-py', colors: '#333' },
        {icon: <YouTube />, label: 'YouTube', url:'https://www.youtube.com/@alandiego314', colors: '#c4302b' },
        {icon: <LinkedIn />, label: 'Linkedin', url:'www.linkedin.com/in/professoralandiego', colors: '#0077B5' },
        {icon: <Instagram />, label: 'Instagram', url:'https://www.instagram.com/prof_alandiego/', colors: '#E4405F' }
    ]

  return (
    <Stack spacing={2} alignItems="center">
        {links.map((link, index) => (
            <Button
                key={index}
                variant='contained'
                startIcon={link.icon}
                href={link.url}
                target='_blank'
                sx={{width: '400px', 
                    backgroundColor: link.colors,
                    '&:hover':{
                        backgroundColor: link.colors,
                        opacity: 0.9
                    }
                }}
            >
                {link.label}
            </Button>
        ))}
    </Stack>
  )
}

export default LinkTree