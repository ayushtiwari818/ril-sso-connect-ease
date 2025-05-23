
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, PieChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ROUTES } from '@/lib/routes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TicketInsights: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header title="Ticket Insights" />

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
