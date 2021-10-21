import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { AppBar, Tabs, Tab, Box, makeStyles } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'

import Page from '@/components/page'
import Icon from '@/components/elements/icon'
import ClientList from '@/components/modules/client-list'
import { IClient } from '@/shared/@types'

import {
  clientUnderProcessing,
  clientInPersonalData,
} from '@/__mocks__/client-mock'

interface ITabPanelProps {
  children: React.ReactNode
  value: number
  index: number
  className?: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  tabs: {
    '& .MuiTabs-indicator': {
      height: 4,
      backgroundColor: theme.palette.primary.light,
    },

    '& .MuiTab-root': {
      fontWeight: 700,

      '&.Mui-selected': {
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
  tabPanel: {
    overflowY: 'scroll',
    paddingTop: 48,
  },
  fab: {
    position: 'fixed',
    bottom: 'calc(80px + env(safe-area-inset-bottom))',
    right: theme.spacing(2),
    backgroundColor: '#F44336',

    '&:hover, &:active': {
      backgroundColor: '#F44345',
    },
  },
}))

const Plug = () => {
  const router = useRouter()
  const classes = useStyles()
  const [tab, setTab] = useState(0)
  const [clients, setClients] = useState<IClient[]>([])

  useEffect(() => {
    // Here will be replaced with a fetch of data
    setClients(tab ? clientInPersonalData : clientUnderProcessing)
  }, [tab])

  const handleFabClick = () => {
    router.push('plug/add-client')
  }

  const handleSelect = async (clientId: string) =>
    router.push(`plug/${clientId}`)

  const clientList = useMemo(
    () => <ClientList clients={clients} onSelect={handleSelect} />,
    [clients, handleSelect],
  )

  const TabPanel = ({ children, value, index, className }: ITabPanelProps) => (
    <Box role='tabpanel' hidden={value !== index} className={className}>
      {value === index && children}
    </Box>
  )

  return (
    <Page
      className={classes.root}
      appBarContent={
        <Tabs
          className={classes.tabs}
          value={tab}
          aria-label='Plug tabs'
          variant='fullWidth'
          onChange={(_, newValue) => setTab(newValue)}
        >
          {tabs.map((t) => (
            <Tab key={t} label={t} />
          ))}
        </Tabs>
      }
    >
      {tabs.map((t, id) => (
        <TabPanel key={t} value={tab} index={id} className={classes.tabPanel}>
          {clientList}
          {t === 'Personal data' && (
            <Fab
              color='primary'
              aria-label='add'
              className={classes.fab}
              onClick={handleFabClick}
            >
              <Icon icon='add' />
            </Fab>
          )}
        </TabPanel>
      ))}
    </Page>
  )
}

export default Plug

const tabs = ['Under processing', 'Personal data']
