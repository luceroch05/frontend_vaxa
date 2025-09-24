import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material'
import { People, CalendarToday, Assignment, TrendingUp } from '@mui/icons-material'
import Link from 'next/link'

export default function DashboardPage() {
  const stats = [
    {
      title: 'Pacientes Activos',
      value: '24',
      icon: <People sx={{ fontSize: 40, color: 'primary.main' }} />,
      href: '/dashboard/pacientes'
    },
    {
      title: 'Citas Hoy',
      value: '8',
      icon: <CalendarToday sx={{ fontSize: 40, color: 'success.main' }} />,
      href: '/dashboard/asistencias'
    },
    {
      title: 'Terapias Completadas',
      value: '156',
      icon: <Assignment sx={{ fontSize: 40, color: 'info.main' }} />,
      href: '/dashboard/reportes'
    },
    {
      title: 'Progreso Promedio',
      value: '87%',
      icon: <TrendingUp sx={{ fontSize: 40, color: 'warning.main' }} />,
      href: '/dashboard/reportes'
    }
  ]

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Resumen general de tu práctica terapéutica
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {stat.icon}
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  component={Link}
                  href={stat.href}
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  Ver detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Acciones Rápidas
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            component={Link}
            href="/dashboard/pacientes"
            variant="contained"
            startIcon={<People />}
          >
            Nuevo Paciente
          </Button>
          <Button
            component={Link}
            href="/dashboard/asistencias"
            variant="outlined"
            startIcon={<CalendarToday />}
          >
            Agendar Cita
          </Button>
          <Button
            component={Link}
            href="/dashboard/reportes"
            variant="outlined"
            startIcon={<Assignment />}
          >
            Generar Reporte
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

