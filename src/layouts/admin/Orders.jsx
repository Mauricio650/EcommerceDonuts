export function Orders () {
    return (
        <section className='h-full w-full relative overflow-auto'>
              <section className='w-full p-4 py-10  overflow-y-auto-auto grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 justify-items-center'>
                <article className="bg-white ring-2 p-2 gap-5 ring-black flex flex-col w-[400px] h-[400px]">
                    <div className="w-full flex justify-between">
                        <div className="p-1  bg-amber-100"><p>Pendiente</p></div>

                        <div className="flex gap-2">
                            <button className="p-1 bg-red-100">Borrar</button>
                            <button className="p-1 bg-green-100">Entregar</button>
                        </div>
                    </div>

                    <div className="bg-gray-100 px-2">
                        <div>
                            <p>Productos</p>
                            <div className="h-[0.5px] bg-gray-300"></div>
                        </div>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                        
                    </div>

                    <div className="bg-gray-100 px-2">
                        <div>
                            <p>Cliente</p>
                            <div className="h-[0.5px] bg-gray-300"></div>
                        </div>
                       <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </article>
              </section>
        </section>
    )
}