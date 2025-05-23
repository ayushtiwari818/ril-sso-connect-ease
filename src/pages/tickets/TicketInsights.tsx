
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, PieChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ROUTES } from '@/lib/routes';
import Footer from '@/components/Footer';

const TicketInsights: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-screen flex flex-col bg-[#f5f6fa]">
      <div className="bg-[#181f60] w-full pt-6 pb-4 shadow-md">
        <div className="flex items-center justify-between mx-4">
          <button onClick={() => navigate(ROUTES.TICKET_DASHBOARD)} className="p-2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-white font-semibold text-lg">Ticket Insights</span>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <Card className="mb-4">
          <CardContent className="p-6 text-center">
            <PieChart className="h-10 w-10 mx-auto mb-4 text-blue-500" />
            <h2 className="text-lg font-medium mb-2">Ticket Analytics</h2>
            <p className="text-gray-500">Ticket insights feature is under development. Check back soon for detailed analytics on ticket performance and resolution metrics.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <BarChart className="h-10 w-10 mx-auto mb-4 text-green-500" />
            <h2 className="text-lg font-medium mb-2">Performance Metrics</h2>
            <p className="text-gray-500">Advanced ticket performance metrics will be available in the next update.</p>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default TicketInsights;
