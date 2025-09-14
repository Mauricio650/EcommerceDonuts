import { useState } from "react";
import { MenuGrid } from "../components/icons/icons";

export function AdminPage () {
  const [showSideBar, setShowSideBar] = useState(true)

  return (
    <section className="w-full h-full">
    <header className="w-full relative z-10 p-4 flex gap-3 justify-start items-center shadow-xl/20">
        <h1 className="chewy-regular text-white text-lg sm:text-xl text-shadow-2xs text-shadow-black/30">Homer's Donuts - Panel administrador</h1>
        <div onClick={() => setShowSideBar((p) => {
          return p === true ? false : true
        })} className="cursor-pointer">
           <MenuGrid></MenuGrid>
        </div>
    </header>

    <section className=" w-full min-h-screen flex justify-between">
      <section className={`bg-white max-[500px]:absolute transition-all ease-in duration-200 overflow-hidden z-5 ${showSideBar ? 'w-[300px] max-[500px]:w-[220px] h-screen py-7 px-3' : 'w-[0px]'}  shadow-xl/20`}>
        <section className="space-grotesk text-md text-shadow-2xs text-shadow-black/30  flex flex-col gap-2">
          <div className="py-3 bg-[#FD70A7]/20 px-4">
            <p>DashBoard</p>
          </div>
           <div className="py-3 bg-[#FD70A7]/20 px-4">
            <p>Users</p>
          </div>

           <div className="py-3 bg-[#FD70A7]/20 px-4">
            <p>Log out</p>
          </div>

        </section>
      </section>
      <section className="bg-[#FECBDE] w-full">
        <section className="h-[270px] p-10">
          <article className="flex shadow-xl/20 flex-col justify-between w-[400px] h-[200px] bg-white rounded-xl">
            <section className="flex justify-between items-center p-5">
              <div>
                <p className="text-3xl space-grotesk text-shadow-2xs text-green-600 text-shadow-black/30">$ 50.000</p>
                <p className="dancing-script text-xl mt-2 text-shadow-2xs text-shadow-black/30">Ingresos</p>
              </div>
              <div>
                Hello
              </div>
            </section>
            <div className="h-[42px] bg-green-600 rounded-b-xl"></div>
          </article>
        </section>
        <section className=" w-[95%] h-[60%] bg-white p-2 mx-auto rounded-xl shadow-xl/20">
          <h1>asdasdsad</h1>
        </section>
      </section>
    </section>
    </section>
  )
}
