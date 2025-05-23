
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageSquare, Paperclip, Clock, User, Tag, MapPin } from 'lucide-react';
import { tickets } from '@/data/ticketsData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/lib/routes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TicketDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const ticket = tickets.find(t => t.id === id);
  
  if (!ticket) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Ticket Not Found</h1>
        <p className="text-gray-600 mb-8">The ticket you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate(ROUTES.TICKET_DASHBOARD)}>
          Return to Tickets
        </Button>
      </div>
    );
  }
  
  const statusColors = {
    'open': 'bg-blue-100 text-blue-800 border-blue-200',
    'in-progress': 'bg-purple-100 text-purple-800 border-purple-200',
    'resolved': 'bg-green-100 text-green-800 border-green-200',
    'closed': 'bg-gray-100 text-gray-800 border-gray-200'
  };
  
  const priorityColors = {
    'low': 'bg-green-100 text-green-800',
    'medium': 'bg-yellow-100 text-yellow-800',
    'high': 'bg-orange-100 text-orange-800',
    'critical': 'bg-red-100 text-red-800'
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header title={`Ticket #${ticket.id}`} />

      <div className="flex-1 overflow-y-auto p-4">
        <Card className="mb-4">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-semibold">{ticket.title}</h2>
              <Badge className={priorityColors[ticket.priority]}>
                {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)} Priority
              </Badge>
            </div>
            
            <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${statusColors[ticket.status]}`}>
              {ticket.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </div>
            
            <p className="text-gray-700 mb-6">{ticket.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <Tag className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Category:</span>
                <span className="text-sm font-medium ml-2">{ticket.category}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Created by:</span>
                <span className="text-sm font-medium ml-2">{ticket.createdBy}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Assigned to:</span>
                <span className="text-sm font-medium ml-2">{ticket.assignedTo || 'Unassigned'}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Last updated:</span>
                <span className="text-sm font-medium ml-2">{new Date(ticket.updatedAt).toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Department:</span>
                <span className="text-sm font-medium ml-2">{ticket.department || 'N/A'}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Location:</span>
                <span className="text-sm font-medium ml-2">{ticket.location || 'N/A'}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Comments</h3>
            
            {ticket.comments && ticket.comments.length > 0 ? (
              <div className="space-y-4">
                {ticket.comments.map(comment => (
                  <div key={comment.id} className="border-b pb-3">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{comment.createdBy}</span>
                      <span className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{comment.content}</p>
                    
                    {comment.attachments && comment.attachments.length > 0 && (
                      <div className="flex items-center mt-2">
                        <Paperclip className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-sm text-blue-600">{comment.attachments.length} attachment(s)</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No comments yet</p>
            )}
            
            <div className="mt-4">
              <div className="border rounded-lg p-3">
                <textarea 
                  className="w-full resize-none outline-none text-sm" 
                  rows={3}
                  placeholder="Add a comment..."
                />
                <div className="flex justify-between mt-2">
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Paperclip className="h-4 w-4 mr-1" />
                    Attach
                  </Button>
                  <Button size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Comment
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-between mb-20">
          <Button variant="outline">Close Ticket</Button>
          <Button variant="outline" className="ml-2">Escalate</Button>
          <Button>Resolve Ticket</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TicketDetails;
