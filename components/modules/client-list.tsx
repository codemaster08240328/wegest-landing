import ClientListItem from './client-list-item'
import { IClient } from '@/shared/@types'

interface IProps {
  clients?: IClient[]
  itemClass?: string
  itemActionIcon?: string
  onSelect?: (clientId: string) => void
}

const ClientList = ({
  clients,
  itemClass,
  itemActionIcon,
  onSelect,
}: IProps) => {
  return (
    <>
      {clients?.map((client, idx) => (
        <ClientListItem
          key={client.id}
          className={itemClass}
          actionIcon={itemActionIcon}
          client={client}
          onClick={onSelect}
        />
      ))}
    </>
  )
}

export default ClientList
