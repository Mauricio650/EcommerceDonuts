export function useDeleteProduct (){
    const handleClickDelete = async (e) => {
        await fetch(`${import.meta.env.VITE_API_URL_LOCAL}products/${e.currentTarget.dataset.id}`,{
            method: 'DELETE',
            credentials: 'include'
        })
    }

    return {handleClickDelete}
}