import { useState, useCallback } from 'react'
import Image from 'next/image'
import usePwa from 'use-pwa'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

import Page from '@/components/page'
import Icon from '@/components/elements/icon'
import { isiOS } from '@/lib/helpers'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight:
      'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
    paddingBottom: theme.spacing(9.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(324deg, #0d47a1, #1976d2, #90caf9, #81c784, #43a047)',
    backgroundSize: '400% 400%',
    animation: '$bg 20s ease infinite',
  },
  '@keyframes bg': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  button: {},
  installPrompt: {
    position: 'fixed',
    left: 0,
    bottom: 'calc(55px + env(safe-area-inset-bottom))',
    margin: 20,
    width: 'calc(100% - 40px)',

    '& > .MuiAccordion-root': {
      margin: 0,
    },
  },
  accordion: {
    background: 'rgba(255, 255, 255, 0.35)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.28)',

    '& .MuiAccordionDetails-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  installPromptHeader: {
    padding: 0,

    '& > .MuiListItemAvatar-root': {
      minWidth: 55,
      minHeight: 55,
      marginRight: theme.spacing(2),

      '& > div': {
        borderRadius: 8,
      },
    },
  },
  instructions: {
    textAlign: 'center',
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: '1rem',
    marginBottom: theme.spacing(2),
  },
  iosSteps: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iosStep: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
      width: 46,
      height: 46,
      fontSize: 30,
      background: '#fefefe',
      padding: 8,
      borderRadius: 10,
      color: '#7384d8',
    },
    '& > p': {
      margin: theme.spacing(1, 0, 0, 0),
      fontSize: '0.8rem',
      opacity: 0.7,
    },

    '&:last-of-type': {
      '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
        color: '#000',
      },
    },
  },
  accordionActions: {
    '& > .MuiAccordionSummary-content': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}))

const AppleShareIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z' />
    </SvgIcon>
  )
}

const AppleAddIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M11,7H13V11H17V13H13V17H11V13H7V11H11V7Z' />
    </SvgIcon>
  )
}

const InstallPWA = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const {
    appinstalled,
    canInstallprompt,
    enabledA2hs,
    enabledUpdate,
    isPwa,
    showInstallPrompt,
    unregister,
  } = usePwa()

  const handleUpdatePWA = useCallback(async () => {
    const result = await unregister()

    if (result) {
      window.location.reload()

      return
    }

    console.error('Update failed!')
  }, [unregister])

  const handleInstall = (event: React.ChangeEvent<any>) => {
    if (enabledA2hs) return setExpanded(!expanded)
    if (canInstallprompt) showInstallPrompt()
  }

  const isAppleMobile = isiOS()

  return (
    <Page className={classes.root}>
      <div className={classes.installPrompt}>
        <Accordion
          className={classes.accordion}
          expanded={expanded}
          onChange={handleInstall}
        >
          <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
            <ListItem component='div' className={classes.installPromptHeader}>
              <ListItemAvatar>
                <Image
                  src='/images/icons/app-icon.png'
                  height={55}
                  width={55}
                  objectFit='scale-down'
                  alt='Logo'
                />
              </ListItemAvatar>
              <ListItemText
                primary='WeGest'
                secondary='You will get a faster and awesome access experience.'
              />
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='p' className={classes.instructions}>
              Add this Web App to your Home Screen for quick and easy access.
            </Typography>
            <div className={classes.iosSteps}>
              <div className={classes.iosStep}>
                <Icon icon='explore' type='outlined' />
                <Typography component='p' className={classes.instructions}>
                  1. Open in Safari browser
                </Typography>
              </div>

              <div className={classes.iosStep}>
                <AppleShareIcon />
                <Typography component='p' className={classes.instructions}>
                  2. Share in Navigation bar
                </Typography>
              </div>

              <div className={classes.iosStep}>
                <AppleAddIcon />
                <Typography component='p' className={classes.instructions}>
                  3. Add to Home Screen
                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={false} className={classes.accordion}>
          <AccordionSummary
            className={classes.accordionActions}
            aria-controls='panel1a-content'
            id='panel2a-header'
          >
            {(!appinstalled || !isPwa) && (
              <Button
                fullWidth
                className={classes.button}
                variant='contained'
                size='large'
                disabled={isAppleMobile ? !enabledA2hs : !canInstallprompt}
                onClick={handleInstall}
              >
                Hey install WeGest PWA 👋
              </Button>
            )}

            {enabledUpdate && isPwa && (
              <>
                <Button
                  className={classes.button}
                  variant='contained'
                  color='primary'
                  size='large'
                  onClick={handleUpdatePWA}
                >
                  Update PWA
                </Button>
              </>
            )}
          </AccordionSummary>
        </Accordion>
      </div>
    </Page>
  )
}

export default InstallPWA
