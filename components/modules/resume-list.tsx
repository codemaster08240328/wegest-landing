import { makeStyles } from '@material-ui/core/styles'
import ResumeListItem from '@/components/modules/resume-list-item'
import { IResume } from '@/shared/@types/models/stastics'
import { cashValue } from '@/lib/helpers/strings'

interface IProps {
  resume: IResume
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingInlineStart: theme.spacing(0.5),
    paddingInlineEnd: theme.spacing(0.5),
  },
}))

const ResumeList = ({ resume }: IProps) => {
  const classes = useStyles()

  return (
    <ul className={classes.root}>
      <ResumeListItem
        icon='euro'
        value={cashValue(resume.revenue)}
        label='Revenue'
      />
      <ResumeListItem
        icon='description'
        iconType='outlined'
        value={cashValue(resume.avgReceiptValue)}
        label='Average receipt'
      />
      <ResumeListItem
        icon='label_important'
        value={cashValue(resume.fees)}
        label='Fees'
      />
      <ResumeListItem
        icon='label_important'
        value={cashValue(resume.serviceFees)}
        label='Services fees'
      />
      <ResumeListItem
        icon='label_important'
        value={cashValue(resume.productFees)}
        label='Products fees'
      />
      <ResumeListItem
        icon='group'
        value={resume.attendance}
        label='Attendance'
      />
      <ResumeListItem
        icon='person_add'
        value={resume.newCustomers}
        label='New customers'
      />
      <ResumeListItem
        icon='person'
        value={resume.handledCustomer}
        label='Customers'
      />
      <ResumeListItem
        icon='local_mall'
        value={cashValue(resume.expenses)}
        label='Expenses'
      />
      <ResumeListItem
        icon='thumb_up'
        iconType='outlined'
        value={cashValue(resume.netIncome)}
        label='Net income'
      />
    </ul>
  )
}

export default ResumeList
