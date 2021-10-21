import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'

import Icon from '@/components/elements/icon'
import Checkbox from '@/components/elements/checkbox'

interface ServiceListItemProps {
  className?: string
  category: any
  expanded?: string
  selectedServices?: string[]
  onClick: (appointment: any) => void
  onSelectService: (service: any) => void
}

const Accordion = withStyles({
  root: {
    border: 'none',
    margin: 0,
    marginTop: 10,

    '&:first-child': {
      marginTop: 0,
    },

    '&:not(:last-child)': {
      borderBottom: 0,
    },

    '&:before': {
      display: 'none',
    },

    '&$expanded': {
      marginTop: 10,
      marginBottom: 0,
      boxShadow: 'none',

      '&:first-child': {
        marginTop: 0,
      },
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    borderBottom: 'none',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '& > span.material-icons.MuiIcon-root': {
      marginRight: 10,
    },

    '& > h3': {
      textTransform: 'uppercase',
    },

    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
}))(MuiAccordionDetails)

const useStyles = makeStyles((theme) => ({
  root: {},
  checkbox: {
    '& > label > span.MuiTypography-root': {
      fontWeight: '500',
      opacity: 0.5,
    },
  },
}))

const ServiceListItem = ({
  className,
  expanded,
  category,
  selectedServices,
  onClick,
  onSelectService,
}: ServiceListItemProps) => {
  const classes = useStyles()
  const isExpanded = expanded === category.title

  return (
    <Accordion
      expanded={isExpanded}
      className={[classes.root, className].join(' ')}
      onChange={() => onClick(category.title)}
    >
      <AccordionSummary
        aria-controls={`${category.title}-content`}
        id={`${category.title}-header`}
        style={{
          backgroundColor: `#${category.backgroundColor}`,
          color: `#${category.textColor}`,
        }}
      >
        <Icon icon={isExpanded ? 'arrow_drop_down' : 'arrow_right'} />
        <Typography data-testid='title' component='h3'>
          {category.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails data-testid='services'>
        {category.services.map((service: any) => (
          <Checkbox
            key={service.id}
            name={service.id}
            label={service.title}
            className={classes.checkbox}
            checked={selectedServices?.includes(service.id)}
            onChange={() => onSelectService(service)}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

ServiceListItem.defaultProps = {
  expanded: '',
  selectedServices: [],
}

export default ServiceListItem
