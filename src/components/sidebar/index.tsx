import React from 'react'
import logo from './assets/logo.png'
import { BsBarChartLine, BsFillArchiveFill, BsPeople, BsGear} from 'react-icons/bs'
import { BiExit } from 'react-icons/bi'

export default function Sidebar() {
  return (
    <aside className='flex-col flex-1 w-[348px] h-screen border-r p-6 border-l '>
      <div className='justify-center items-center flex h-[5%] w-full mt-10 '>
        <img src={logo} />
      </div>

      <div className='flex flex-col justify-center items-center h-[70%] border-b mb-4'>
        <nav className='flex items-start justify-center  w-full text-left'>
          <ul className='flex flex-col justify-center items-start'>
            <li className='flex flex-col justify-center items-start space-y-5'>
              <a href='#' className='flex flex-row space-x-1 justify-center items-center'>
                <BsBarChartLine />
                <span className='text-2xl'>Dashboard</span>
              </a>
              <a href='#' className='flex flex-row space-x-1  justify-center items-center bg-primary bg-opacity-10  p-2 rounded-lg'>
                <BsFillArchiveFill color='#811B39' />
                <span className='text-2xl text-primary font-semibold'>Meus Projetos</span>
              </a>
              <a href='#' className='flex flex-row space-x-1 justify-center items-center'>
                <BsPeople />
                <span className='text-2xl'>Membros</span>
              </a>

              <a href='#' className='flex flex-row space-x-1 justify-center items-center'>
                <BsGear/>
                <span className='text-2xl'>Configurações</span>
              </a>
            </li>
          </ul>

        </nav>

      </div>

      <div className='flex flex-col justify-center items-center '>
        <nav>
          <ul className='flex flex-col justify-center items-center'>
            <li className='flex flex-col justify-center items-center space-y-5'>
              <a href='#' className='flex flex-row space-x-1 justify-center items-center'>
                <BiExit/>
                <span className='text-2xl'>Sair</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

  )
}