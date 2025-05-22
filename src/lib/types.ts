
export interface DeliveryAssociate {
  id: string;
  name: string;
  phone: string;
  currentLocation?: {
    lat: number;
    lng: number;
  };
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  items: ShipmentItem[];
  totalItems: number;
  scheduledTime: string; // ISO string
  status: "pending" | "in-transit" | "delivered" | "failed";
  associateId?: string;
  eta?: string; // ISO string
}

export interface ShipmentItem {
  id: string;
  name: string;
  quantity: number;
  sku: string;
}

export type TimeSlot = "morning" | "afternoon" | "evening";
