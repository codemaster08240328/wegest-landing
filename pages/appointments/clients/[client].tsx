import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Page from '@/components/page'
import ServiceList from '@/components/modules/service-list'
import ServiceChips from '@/components/modules/service-chips'
import { categories as serviceCategories } from '@/__mocks__/service-categories-mock'

interface IService {
  id: string
  title: string
  qualified?: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100vh',
    paddingBottom: theme.spacing(9.5),
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    padding: theme.spacing(3),

    '& > p': {
      textAlign: 'center',
    },
  },
  serviceList: {
    height: 'calc(100vh - 83px)',
    maxHeight: 'calc(100vh - 83px)',
    paddingBottom: theme.spacing(4),
    overflow: 'auto',
  },
  accordion: {
    border: 'none',
    marginTop: 10,

    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  accordionSummary: {
    borderBottom: 'none',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  accordionDetails: {
    flexDirection: 'column',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
  },
}))

const SelectServices = () => {
  const router = useRouter()
  const classes = useStyles()
  const [selectedServices, setSelectedServices] = useState<IService[]>([])

  const selectedServiceIDs = selectedServices.map((service) => service.id)

  const handleSelectService = (service: IService) => {
    const { id, title }: IService = service

    if (selectedServiceIDs.includes(id)) {
      return setSelectedServices([
        ...selectedServices.filter((s) => s.id !== id),
      ])
    }

    return setSelectedServices([...selectedServices, { id, title }])
  }

  const handleChooseDay = () => {
    router.push({ pathname: '/appointments', query: { stage: 4 } })
  }

  const categories = serviceCategories || []
  const isEmptyCategories = categories?.length === 0
  const isEmptyCategoriesMessage = 'No services found'

  return (
    <Page className={classes.root}>
      <ServiceChips chips={selectedServices} onChange={handleSelectService} />
      <Box className={classes.serviceList}>
        {isEmptyCategories ? (
          <div className={classes.empty}>
            <p>{isEmptyCategoriesMessage}</p>
          </div>
        ) : (
          <ServiceList
            serviceCategories={categories}
            selectedServices={selectedServiceIDs}
            onSelectService={handleSelectService}
          />
        )}
      </Box>
      <Box className={classes.footer}>
        <Button
          variant='contained'
          color='primary'
          size='large'
          onClick={handleChooseDay}
        >
          Select a Day
        </Button>
      </Box>
    </Page>
  )
}

export default SelectServices
