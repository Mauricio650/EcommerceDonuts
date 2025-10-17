import { useGetClients } from '../../hooks/useGetClients'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { BagShop } from '../../components/icons/icons'
import { errorToast, successToast } from '../../toast/toast'

export function Clients () {
  const { loading, clients, uSetA } = useGetClients()
  const API_URL = import.meta.env.VITE_API_URL_LOCAL

  const ActionsClients = (rowData) => {
    const deleteCLient = async () => {
      try {
        const response = await fetch(`${API_URL}sales/clients/${rowData.id}`, {
          method: 'DELETE',
          credentials: 'include'
        })

        if (response.ok) {
          successToast({ text: 'Cliente borrado' })
        }
      } catch (error) {
        console.log(error)
        errorToast({ path: 'Interno', text: 'No se pudo borrar el cliente por favor intentelo mas tarde' })
      }
      uSetA()
    }
    return (
      <div>
        <button onClick={deleteCLient} className='px-2 hover:bg-red-700 py-1 shadow-2xs cursor-pointer bg-red-500/60 ring-1 ring-black rounded-xs text-white font-bold'>Borrar</button>
      </div>
    )
  }

  return (
    <section className='w-full p-1 md:p-6'>
      <h2 className='text-xl font-semibold mb-4 text-gray-500'>Gestión de Clientes</h2>

      <DataTable
        value={clients}
        paginator
        stripedRows
        showGridlines
        loading={loading}
        rows={50}
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate='RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink'
        currentPageReportTemplate='Mostrando {first} a {last} de {totalRecords} clientes'
        responsiveLayout='scroll'
        scrollable
        scrollHeight='400px'
        className='shadow-lg rounded-2xl'
        tableStyle={{ minWidth: '60rem' }}
      >
        <Column className='ring-1 ring-[#FD70A7] p-2' header='Acciones' body={ActionsClients} />
        <Column className='ring-1 ring-[#FD70A7] p-2' field='id' header='ID' sortable style={{ width: '10%' }} />
        <Column className='ring-1 ring-[#FD70A7] p-2' field='name' header='Nombre' sortable />
        <Column className='ring-1 ring-[#FD70A7] p-2' field='address' header='Dirección' />
        <Column className='ring-1 ring-[#FD70A7] p-2' field='phone_number' header='Teléfono' />
        <Column className='ring-1 ring-[#FD70A7] p-2' field='email' header='Correo' />

      </DataTable>
    </section>
  )
}
