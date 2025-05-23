import React, { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import DeliveryTimeSection from '@/components/DeliveryTimeSection';
import { morningDeliveries, afternoonDeliveries, eveningDeliveries } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Shipment } from '@/lib/types';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
type StatusFilter = 'all' | 'pending' | 'in-transit' | 'delivered';

const Deliveries = () => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const filterDeliveries = (deliveries: Shipment[]) => {
    if (statusFilter === 'all') return deliveries;
    return deliveries.filter(delivery => delivery.status === statusFilter);
  };

  const filteredMorningDeliveries = filterDeliveries(morningDeliveries);
  const filteredAfternoonDeliveries = filterDeliveries(afternoonDeliveries);
  const filteredEveningDeliveries = filterDeliveries(eveningDeliveries);
  const navigate = useNavigate();
  const onBack=()=>{
    navigate('/home');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white py-4 px-4 flex items-center shadow-sm">
        <button onClick={() => onBack()} className="mr-3">
          <ChevronLeft size={24}/>
        </button>
        <h1 className="text-xl font-semibold">Delivery Details</h1>
      </header>
      <SearchBar />
      
      <div className="px-4 py-2 flex gap-2 overflow-x-auto">
        <Button
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setStatusFilter('all')}
          className="whitespace-nowrap"
        >
          All
        </Button>
        <Button
          variant={statusFilter === 'pending' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setStatusFilter('pending')}
          className="whitespace-nowrap"
        >
          Pending
        </Button>
        <Button
          variant={statusFilter === 'in-transit' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setStatusFilter('in-transit')}
          className="whitespace-nowrap"
        >
          In Transit
        </Button>
        <Button
          variant={statusFilter === 'delivered' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setStatusFilter('delivered')}
          className="whitespace-nowrap"
        >
          Delivered
        </Button>
      </div>
      <div className='mt-4 pb-16 flex flex-col max-h-[calc(100vh-200px)] overflow-auto'>
        <DeliveryTimeSection 
          title="Morning (4am - 10am)" 
          timeSlot="morning" 
          deliveries={filteredMorningDeliveries} 
        />
        
        <DeliveryTimeSection 
          title="Afternoon (10am - 4pm)" 
          timeSlot="afternoon" 
          deliveries={filteredAfternoonDeliveries} 
        />
        
        <DeliveryTimeSection 
          title="Evening (4pm - 10pm)" 
          timeSlot="evening" 
          deliveries={filteredEveningDeliveries} 
        />
      </div>
      <Footer />
    </div>
  );
};

export default Deliveries;
