import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import Page from '@/components/page'
import TextField from '@/components/elements/text-field'
import ClientList from '@/components/modules/client-list'
import { clientInPersonalData } from '@/__mocks__/client-mock'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100vh',
    paddingBottom: theme.spacing(9.5),
  },
  searchInput: {
    background: '#f2f2f2',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),

    '& > div': {
      margin: 0,

      '& > label': {
        left: '50%',
        transform: 'translate(-50%, 24px) scale(1)',
        fontWeight: '500',
        opacity: 0.5,
        fontSize: '1rem',

        '&.MuiInputLabel-shrink': {
          transform: 'translate(-35%, 1.5px) scale(0.75)',
        },
      },

      '& > p, & > div > input': {
        textAlign: 'center',
      },
    },
  },
  clientList: {
    height: 'calc(100vh - 83px)',
    maxHeight: 'calc(100vh - 83px)',
    overflow: 'auto',
  },
  clientListItem: {
    padding: theme.spacing(1.5),
  },
}))

const SelectClient = () => {
  const router = useRouter()
  const classes = useStyles()
  const [search, setSearch] = useState('')
  const [clients, setClients] = useState(clientInPersonalData)

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const handleSelect = (clientId: string) => {
    router.push(`clients/${clientId}`)
  }

  useEffect(() => {
    setClients(
      clientInPersonalData.filter((client) => {
        return client.firstName.toLowerCase().includes(search.toLowerCase()) ||
          client.lastName.toLowerCase().includes(search.toLowerCase())
          ? client
          : false
      }),
    )
  }, [search])

  return (
    <Page className={classes.root}>
      <TextField
        fullWidth
        name='search'
        className={classes.searchInput}
        value={search}
        label='Name and surname'
        helperText='Search for the customer by entering their name and surname'
        onChange={handleSearchInput}
      />
      <Box className={classes.clientList}>
        <ClientList
          clients={clients}
          itemClass={classes.clientListItem}
          itemActionIcon='chevron_right'
          onSelect={handleSelect}
        />
      </Box>
    </Page>
  )
}

export default SelectClient
