import { useState, useMemo } from 'react'
import { Tabs, Tab, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@/components/elements/transition-modal'
import ColorButton from '@/components/elements/color-button'
import ServiceList from './service-list'
import ServiceChips from './service-chips'
import { categories as serviceCategories } from '@/__mocks__/service-categories-mock'
import { categories as productCategories } from '@/__mocks__/product-categories-mock'

interface IProps {
  open: boolean
  onClose?: () => void
  onAdd?: () => void
}

interface IService {
  id: string
  title: string
  qualified?: boolean
}

const EMPTY_SERVICE_MESSAGE = 'No services found'
const EMPTY_PRODUCT_MESSAGE = 'No products found'
const isEmptyServiceCategories = serviceCategories?.length === 0
const isEmptyProductCategories = productCategories?.length === 0

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1.5),
    borderRadius: 10,
    height: '80vh',
  },

  tabs: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    fontWeight: 700,
    minHeight: 35,

    '& .Mui-selected': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
    },
  },

  tab: {
    fontWeight: 700,
    minHeight: 35,
  },

  tabPanel: {
    height: 'calc(100% - 150px)',
    overflow: 'auto',
    marginTop: theme.spacing(1),
  },

  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
}))

const ServiceModal = ({ open, onClose, onAdd }: IProps) => {
  const classes = useStyles()
  const [tab, setTab] = useState(0)
  const [selectedServices, setSelectedServices] = useState<IService[]>([])
  const selectedServiceIDs = useMemo(
    () => selectedServices.map((service) => service.id),
    [selectedServices],
  )

  const handleSelectService = (service: IService) => {
    const { id, title } = service

    setSelectedServices(
      selectedServiceIDs.includes(id)
        ? [...selectedServices.filter((item) => item.id !== id)]
        : [...selectedServices, { id, title }],
    )
  }

  const TabPanel = ({
    children,
    value,
    index,
    className,
  }: {
    children: React.ReactNode
    value: number
    index: number
    className?: string
  }) => {
    return (
      <div role='tabpanel' hidden={value !== index} className={className}>
        {value === index && <Box>{children}</Box>}
      </div>
    )
  }

  return (
    <Modal open={open} className={classes.root} onClose={onClose}>
      <ServiceChips chips={selectedServices} onChange={handleSelectService} />
      <Tabs
        selectionFollowsFocus
        variant='fullWidth'
        className={classes.tabs}
        value={tab}
        indicatorColor='primary'
        onChange={(_, newValue) => setTab(newValue)}
      >
        <Tab label='Services' className={classes.tab} />
        <Tab label='Products' className={classes.tab} />
      </Tabs>
      <TabPanel value={tab} index={0} className={classes.tabPanel}>
        {isEmptyServiceCategories ? (
          <Typography variant='body1'>{EMPTY_SERVICE_MESSAGE}</Typography>
        ) : (
          <ServiceList
            serviceCategories={serviceCategories}
            selectedServices={selectedServiceIDs}
            onSelectService={handleSelectService}
          />
        )}
      </TabPanel>
      <TabPanel value={tab} index={1} className={classes.tabPanel}>
        {isEmptyProductCategories ? (
          <Typography variant='body1'>{EMPTY_PRODUCT_MESSAGE}</Typography>
        ) : (
          <ServiceList
            serviceCategories={productCategories}
            selectedServices={selectedServiceIDs}
            onSelectService={handleSelectService}
          />
        )}
      </TabPanel>
      <Box className={classes.actions}>
        <ColorButton color='indianRed' onClick={onClose}>
          Close
        </ColorButton>
        <ColorButton color='seaGreen' onClick={onAdd}>
          Add
        </ColorButton>
      </Box>
    </Modal>
  )
}

export default ServiceModal
