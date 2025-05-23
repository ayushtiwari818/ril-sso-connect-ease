
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ROUTES } from '@/lib/routes';
import { toast } from '@/components/ui/sonner';
import Footer from '@/components/Footer';
import { Ticket } from '@/lib/types';

const NewTicket: React.FC = () => {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [department, setDepartment] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a new ticket ID
    const ticketId = `T-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date().toISOString();
    
    // Create new ticket object
    const newTicket: Ticket = {
      id: ticketId,
      title,
      description,
      status: 'open',
      priority: priority as Ticket['priority'],
      category,
      createdAt: now,
      updatedAt: now,
      createdBy: 'Mobile User',
      department,
      location: 'Store #1234'
    };
    
    // Save to localStorage
    const storedTickets = localStorage.getItem('tickets');
    let tickets = storedTickets ? JSON.parse(storedTickets) : [];
    tickets = [newTicket, ...tickets];
    localStorage.setItem('tickets', JSON.stringify(tickets));
    
    toast.success("Ticket created successfully!");
    navigate(ROUTES.TICKET_DASHBOARD);
  };
  
  return (
    <div className="h-screen flex flex-col bg-[#f5f6fa]">
      <div className="bg-[#181f60] w-full pt-6 pb-4 shadow-md">
        <div className="flex items-center justify-between mx-4">
          <button onClick={() => navigate(ROUTES.TICKET_DASHBOARD)} className="p-2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-white font-semibold text-lg">Create New Ticket</span>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  placeholder="Enter ticket title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="POS System">POS System</SelectItem>
                    <SelectItem value="Inventory">Inventory</SelectItem>
                    <SelectItem value="Customer Service">Customer Service</SelectItem>
                    <SelectItem value="Facility">Facility</SelectItem>
                    <SelectItem value="Digital Displays">Digital Displays</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select value={department} onValueChange={setDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Checkout">Checkout</SelectItem>
                    <SelectItem value="Stock Room">Stock Room</SelectItem>
                    <SelectItem value="Customer Service">Customer Service</SelectItem>
                    <SelectItem value="Facilities">Facilities</SelectItem>
                    <SelectItem value="Front Entrance">Front Entrance</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the issue in detail" 
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="attachments">Attachments (Optional)</Label>
                <Input id="attachments" type="file" multiple className="py-2" />
              </div>
              
              <div className="pt-4 flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => navigate(ROUTES.TICKET_DASHBOARD)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Create Ticket
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewTicket;
