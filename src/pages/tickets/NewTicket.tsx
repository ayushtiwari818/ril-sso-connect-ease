
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ROUTES } from '@/lib/routes';
import { toast } from '@/components/ui/sonner';

const NewTicket: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Ticket created successfully!");
    navigate(ROUTES.TICKET_DASHBOARD);
  };
  
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white py-4 px-4 flex items-center shadow-sm">
        <ChevronLeft 
          className="h-6 w-6 text-gray-700 mr-3 cursor-pointer" 
          onClick={() => navigate(ROUTES.TICKET_DASHBOARD)}
        />
        <h1 className="text-xl font-semibold">Create New Ticket</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter ticket title" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pos">POS System</SelectItem>
                    <SelectItem value="inventory">Inventory</SelectItem>
                    <SelectItem value="customer-service">Customer Service</SelectItem>
                    <SelectItem value="facility">Facility</SelectItem>
                    <SelectItem value="digital-displays">Digital Displays</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select>
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
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checkout">Checkout</SelectItem>
                    <SelectItem value="stock-room">Stock Room</SelectItem>
                    <SelectItem value="customer-service">Customer Service</SelectItem>
                    <SelectItem value="facilities">Facilities</SelectItem>
                    <SelectItem value="front-entrance">Front Entrance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the issue in detail" 
                  rows={5}
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
    </div>
  );
};

export default NewTicket;
