import { DashboardLayout } from '@/components/dasboard-layout'
import React from 'react'

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold">Bienvenido al Dashboard</h1>
        <p className="mt-4 text-gray-600">Aquí puedes gestionar tu sistema POS.</p>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage