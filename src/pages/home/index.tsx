import React from 'react'
import Table from './components/table'
import {IoAdd} from 'react-icons/io5'
import {BsFilter, BsSearch} from 'react-icons/bs'
export default function HomePage() {
  return (
    <div className='flex flex-col w-screen  '>
      <div className='mt-10 pl-10'>
        <h1 className='text-left font-bold text-2xl'>Meus projetos</h1>
      </div>

      <div className='flex space-x-10 mt-10 ml-10 '>
        <div className='flex rounded border space-x-1 p-2 w-[100px] items-center justify-center '>
          <BsFilter/>
          <span className='text-center'>Filtros</span>
        </div>

        <div className='flex items-center space-x-4 border-b border-black '>
          <BsSearch/>
          <input type='text' placeholder='Pesquisar' />
        </div>
        <div className='flex align-center w-full'>
          <div className='flex items-center justify-end w-[90%] '>

            <button className='bg-black p-2 rounded flex items-center space-x-1'>
              <IoAdd color='white' />
              <span className='text-white'>Novo Projeto</span></button>
          </div>
        </div>
      </div>



      <div className='flex-1 items-center justify-center mt-10'>
        <Table />
      </div>

    </div>
  )
}