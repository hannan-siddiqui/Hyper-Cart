import { DataTable } from '@/components/custom ui/DataTable'
import { columns } from '@/components/customers/CustomerColumns'

import { Separator } from '@/components/ui/separator'
import Customer from '@/lib/models/Customer'
import connect from '@/lib/mongoDB'


const Customers = async () => {
  await connect()

  const customers = await Customer.find().sort({ createdAt: "desc" })

  return (
    <div className='px-10 py-5'>
      <p className='font-bold text-4xl text-white'>Customers</p>
      <Separator className='bg-grey-1 my-5' />
      <DataTable columns={columns} data={customers} searchKey='name'/>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default Customers