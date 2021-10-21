import React, { useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AppBar, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import Page from '@/components/page'
import ColorButton from '@/components/elements/color-button'
import Icon from '@/components/elements/icon'
import ResumeList from '@/components/modules/resume-list'
import RadioButtonGroup from '@/components/elements/radio-button'
import SelectField from '@/components/elements/select-field'
import BarChart from '@/components/modules/charts/bar-chart'
import PieChart from '@/components/modules/charts/pie-chart'
import HeatmapGraph from '@/components/modules/charts/heatmap-matrix'
import { resume } from '@/__mocks__/stats-mock'
import { categories } from '@/__mocks__/charts/categories'
import { conversions } from '@/__mocks__/charts/conversions'
import { revenue, revenueTable } from '@/__mocks__/charts/revenue'
import { departments } from '@/__mocks__/charts/departments'

const RadioButton = RadioButtonGroup.Button
const useStyles = makeStyles((theme) => ({
  appbar: {
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
  },
  content: {
    padding: theme.spacing(1),
    paddingTop: 56,
  },
  title: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(2),
    borderBottom: '1px solid',
    lineHeight: 1,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  reports: {
    padding: theme.spacing(1.5),
    paddingTop: theme.spacing(1),
  },
  graphCard: {
    width: '100%',
    padding: theme.spacing(1.25),
    marginTop: theme.spacing(1.25),
  },
  barGraphCard: {
    height: 570,
  },
  barGraphContainer: {
    width: '100%',
    height: 400,
    margin: 0,
    padding: 0,
    marginTop: theme.spacing(1),
  },
  barGraphCardTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: 1,
    fontSize: '0.85rem',
  },
  pieGraphCard: {
    height: 400,
  },
  barGraph2Card: {
    height: 300,
  },
  barGraph3Card: {
    height: 300,
  },
}))

const Stats = () => {
  const classes = useStyles()
  const router = useRouter()
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const role = useAppSelector((state) => state.auth.user?.role)
  const [resumeTarget, setResumeTarget] = useState('month')
  const [annualTrend, setAnnualTrend] = useState('revenue')

  const annualTrends = [
    {
      value: 'revenue',
      label: 'Revenue',
    },
    {
      value: 'avg_receipt_value',
      label: 'Average Receipt Value',
    },
    {
      value: 'attendance',
      label: 'Attendance',
    },
  ]
  const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnnualTrend(event.target.value)
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (role !== 'operator') {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Page>
      <AppBar className={classes.appbar}>
        <ColorButton
          startIcon={<Icon icon='chevron_left' />}
          color='primary'
          size='large'
          onClick={router.back}
        >
          BACK
        </ColorButton>
      </AppBar>

      <Container className={classes.content}>
        <Typography variant='subtitle1' className={classes.title}>
          Resume
        </Typography>
        <RadioButtonGroup
          value={resumeTarget}
          className={classes.actions}
          onChange={setResumeTarget}
        >
          <RadioButton value='month' label='This Month' color='primary' />
          <RadioButton value='today' label='Today' color='primary' />
          <RadioButton value='yesterday' label='Yesterday' color='primary' />
        </RadioButtonGroup>
        <ResumeList resume={resume[resumeTarget]} />
      </Container>

      <Container className={classes.reports}>
        <Typography variant='subtitle1' className={classes.title}>
          Annual Trend
        </Typography>
        <Paper className={clsx(classes.graphCard, classes.barGraphCard)}>
          <SelectField
            options={annualTrends}
            value={annualTrend}
            onChange={onSelect}
          />
          <Container className={classes.barGraphContainer}>
            <BarChart
              data={revenue}
              indexBy='month'
              keys={['2019', '2020', '2021']}
              legends={[]}
            />
          </Container>
          <HeatmapGraph
            data={revenueTable}
            indexBy='year'
            keys={[
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Total',
            ]}
          />
        </Paper>
        <Paper className={clsx(classes.graphCard, classes.pieGraphCard)}>
          <Typography variant='h6' className={classes.barGraphCardTitle}>
            Presenze
          </Typography>
          <PieChart data={conversions} arcLinkLabel='label' />
        </Paper>
        <Paper className={clsx(classes.graphCard, classes.barGraph2Card)}>
          <Typography variant='h6' className={classes.barGraphCardTitle}>
            Reparti
          </Typography>
          <BarChart
            data={departments}
            layout='horizontal'
            indexBy='department'
            keys={['value']}
            margin={{ top: 10, right: 10, bottom: 50, left: 80 }}
            padding={0.85}
            legends={[]}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: -80,
            }}
          />
        </Paper>
        <Paper className={clsx(classes.graphCard, classes.barGraph3Card)}>
          <Typography variant='h6' className={classes.barGraphCardTitle}>
            Services &amp; Products
          </Typography>
          <BarChart
            legendIsClickable
            data={categories}
            indexBy='id'
            type='svg'
            keys={['value']}
            colors={{ datum: 'data.color' }}
            legendAnchor='bottom'
            legendDataFrom='indexes'
          />
        </Paper>
      </Container>
    </Page>
  )
}

export default Stats
