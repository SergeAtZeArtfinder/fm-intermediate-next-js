import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen h-screen">
      <aside className="w-[200px] min-w-[200px] max-w-[200px] h-full border-r border-default-50">
        <Sidebar />
      </aside>
      <div className="w-[calc(100vw-200px)] ">
        <Navbar />
        <main className="h-[calc(100vh-65px)]">{children}</main>
      </div>
    </div>
  )
}

export default Shell
