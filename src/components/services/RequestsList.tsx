
import { Card } from "@/components/ui/card";
import { Package, Car, Clock, MapPin } from "lucide-react";

interface Request {
  id: string;
  type: "transport" | "delivery";
  customerName: string;
  location: string;
  destination?: string;
  productDetails?: string;
  timeline?: string;
  status: "pending" | "accepted" | "completed";
  timestamp: string;
}

const mockRequests: Request[] = [
  {
    id: "1",
    type: "transport",
    customerName: "John Doe",
    location: "123 Main St",
    destination: "456 Oak Ave",
    status: "pending",
    timestamp: "2 minutes ago"
  },
  {
    id: "2",
    type: "delivery",
    customerName: "Jane Smith",
    location: "789 Pine St",
    productDetails: "Large Electronics Package",
    timeline: "Express Delivery",
    status: "accepted",
    timestamp: "15 minutes ago"
  }
];

interface RequestsListProps {
  type: string;
}

export function RequestsList({ type }: RequestsListProps) {
  const filteredRequests = mockRequests.filter(
    request => type === "all" || request.type === type
  );

  return (
    <div className="space-y-4">
      {filteredRequests.map((request) => (
        <Card key={request.id} className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${
                request.type === "transport" 
                  ? "bg-blue-100 text-blue-600" 
                  : "bg-purple-100 text-purple-600"
              }`}>
                {request.type === "transport" ? (
                  <Car className="h-6 w-6" />
                ) : (
                  <Package className="h-6 w-6" />
                )}
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-1">{request.customerName}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{request.location}</span>
                  </div>
                  {request.destination && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>To: {request.destination}</span>
                    </div>
                  )}
                  {request.timeline && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{request.timeline}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                request.status === "pending" 
                  ? "bg-yellow-100 text-yellow-800"
                  : request.status === "accepted"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}>
                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </span>
              <p className="text-sm text-gray-500 mt-2">{request.timestamp}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
