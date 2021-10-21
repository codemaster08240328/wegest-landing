import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import ServiceListItem from '@/components/modules/service-list-item'

interface ServiceListProps {
  className?: string
  serviceCategories?: any[]
  selectedServices?: string[]
  onSelectService: (service: any) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
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
  item: {},
}))

const ServiceList = ({
  className,
  serviceCategories,
  ...rest
}: ServiceListProps) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState('')

  const categories = serviceCategories || []
  const isEmptyCategories = categories?.length === 0
  const isEmptyCategoriesMessage = 'No services found'

  const handleAccordionChange = (panel: string) => {
    setExpanded(expanded === panel ? '' : panel)
  }

  return (
    <div className={clsx(classes.root, className)} data-testid='categories'>
      {isEmptyCategories ? (
        <div className={classes.empty}>
          <p>{isEmptyCategoriesMessage}</p>
        </div>
      ) : (
        categories?.map((category) => {
          return (
            <ServiceListItem
              key={`${category.title}-${category.backgroundColor}`}
              className={classes.item}
              expanded={expanded}
              category={category}
              onClick={handleAccordionChange}
              {...rest}
            />
          )
        })
      )}
    </div>
  )
}

ServiceList.defaultProps = {
  serviceCategories: [],
  selectedServices: [],
}

export default ServiceList
