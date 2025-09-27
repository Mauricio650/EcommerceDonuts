import { CardUser } from '../../components/admin/CardUser'
import { PlusIcon, } from '../../components/icons/icons'
import { useGetUsers } from '../../hooks/useGetUsers'

export function Users () {
    const {userList} = useGetUsers()
  return (
   <section className="h-full w-full overflow-auto">
  <div className="w-full relative top-0">
    <div className="absolute right-0 top-0 cursor-pointer hover:scale-75 filter drop-shadow-2xl drop-shadow-black">
      <PlusIcon />
    </div>
  </div>

  <section className="w-full p-4 py-10  overflow-y-auto-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-center">
    {userList.map(u => (
      <CardUser key={u.id} username={u.username} role={u.role} />
    ))}
  </section>
</section>

  )
}
