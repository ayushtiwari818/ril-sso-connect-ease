
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, PlusCircle, Bell, ChevronLeft } from 'lucide-react';
import { tickets } from '@/data/ticketsData';
import { Ticket } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Footer from '@/components/Footer';
import { ROUTES } from '@/lib/routes';

const TicketDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'open' | 'in-progress' | 'resolved'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTickets = tickets.filter(ticket => {
    // Apply status filter
    if (filter !== 'all' && ticket.status !== filter) {
      return false;
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        ticket.title.toLowerCase().includes(query) ||
        ticket.description.toLowerCase().includes(query) ||
        ticket.id.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  const handleTicketClick = (ticketId: string) => {
    navigate(`/ticket/${ticketId}`);
  };

  const renderPriorityBadge = (priority: Ticket['priority']) => {
    const classes = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-orange-100 text-orange-800',
      critical: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${classes[priority]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white py-4 px-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center">
          <ChevronLeft 
            className="h-6 w-6 text-gray-700 mr-2" 
            onClick={() => navigate(ROUTES.HOME)}
          />
          <h1 className="text-xl font-semibold">Service Tickets</h1>
        </div>
        <div className="flex items-center space-x-3">
          <Bell className="h-6 w-6 text-gray-700" />
        </div>
      </header>

      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input 
              placeholder="Search tickets..." 
              className="pl-10" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="ml-2">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex mb-4 space-x-2 overflow-x-auto py-1">
          {['all', 'open', 'in-progress', 'resolved'].map((status) => (
            <Button
              key={status}
              variant={filter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(status as any)}
              className="whitespace-nowrap"
            >
              {status === 'all' ? 'All Tickets' : 
                status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Button>
          ))}
        </div>

        <div className="space-y-3 pb-24">
          {filteredTickets.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">No tickets found</p>
            </div>
          ) : (
            filteredTickets.map(ticket => (
              <Card 
                key={ticket.id}
                className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleTicketClick(ticket.id)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{ticket.title}</h3>
                  {renderPriorityBadge(ticket.priority)}
                </div>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{ticket.description}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <div>
                    <span className="mr-2">#{ticket.id}</span>
                    <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className={`font-medium px-2 py-0.5 rounded ${
                    ticket.status === 'open' ? 'bg-blue-100 text-blue-700' :
                    ticket.status === 'in-progress' ? 'bg-purple-100 text-purple-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {ticket.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Create new ticket button */}
      <div className="fixed bottom-20 right-4">
        <Button
          className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700"
          onClick={() => navigate(ROUTES.NEW_TICKET)}
        >
          <PlusCircle className="h-6 w-6" />
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default TicketDashboard;
