import React from 'react'



export default function Table() {


  let DATA = [
    {
      id: 1,
      name: 'Pokedex',
      status: 'Desenvolvimento',
      productName: 'Web',
      starterProject: '26/03/2021',
      endProject: '-',
    },
    {
      id: 2,
      name: 'Uber Clone',
      status: 'Concluído',
      productName: 'Web',
      starterProject: '01/08/2022',
      endProject: '01/08/2023',
    },
    {
      id: 3,
      name: 'Pokedex',
      status: 'Desenvolvimento',
      productName: 'App',
      starterProject: '01/08/2022',
      endProject: '01/08/2023',
    },
    {
      id: 4,
      name: 'Uber Clone',
      status: 'Concluído',
      productName: 'Web',
      starterProject: '01/08/2022',
      endProject: '01/08/2023',
    },
    {
      id: 5,
      name: 'Pokedex',
      status: 'Desenvolvimento',
      productName: 'App',
      starterProject: '01/08/2022',
      endProject: '01/08/2023',
    },
    {
      id: 6,
      name: 'Uber Clone',
      status: 'Concluído',
      productName: 'Web',
      starterProject: '01/08/2022',
      endProject: '01/08/2023',
    },
  ]

  return (

    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-10 mx-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700  uppercase  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4 ">
              <div className="flex items-center">
                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="py-3 px-6">
              Projeto
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Produto(s)
            </th>
            <th scope="col" className="py-3 px-6">
              Início do projeto
            </th>
            <th scope="col" className="py-3 px-6">
              Término do projeto
            </th>
            <th scope="col" className="py-3 px-6">

            </th>

          </tr>
        </thead>

        {DATA.map((item) => (
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr className="text-gray-700 dark:text-gray-400">
              <td className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-1-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-1-search" className="sr-only">checkbox</label>
                </div>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    {item.name === 'Pokedex' ?
                      <div className='bg-primary w-full h-full rounded' />

                      : <div className='bg-secondary w-full h-full rounded' />}
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {item.name}
                    </div>

                  </div>
                </div>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center space-x-3 ">
                  {item.status === 'Desenvolvimento' ?
                    <div className='rounded w-2 h-2 flex-row bg-secondary' />

                    : <div className='rounded w-2 h-2 flex-row bg-green-600' />}
                  <span>{item.status}</span>

                </div>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center">
                  <span>
                    {item.productName}
                  </span>
                </div>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center">
                  <span>
                    {item.starterProject}
                  </span>
                </div>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center">
                  <span>
                    {item.endProject}
                  </span>
                </div>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center justify-center border p-1 rounded">
                  <span className='text-black font-bold items-center '>
                   ...
                  </span>
                </div>
              </td>

            </tr>
          </tbody>
        ))}
      </table>
    </div >

  )
}