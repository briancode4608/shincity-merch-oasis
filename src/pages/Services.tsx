
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransportForm } from "@/components/services/TransportForm";
import { DeliveryForm } from "@/components/services/DeliveryForm";
import { RequestsList } from "@/components/services/RequestsList";
import { Card } from "@/components/ui/card";
import { Package, Car } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("transport");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">
        Our <span className="text-gradient">Services</span>
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="transport" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="transport" className="text-lg">
              <Car className="mr-2 h-5 w-5" />
              Transport
            </TabsTrigger>
            <TabsTrigger value="delivery" className="text-lg">
              <Package className="mr-2 h-5 w-5" />
              Delivery
            </TabsTrigger>
          </TabsList>
          
          <Card className="p-6">
            <TabsContent value="transport">
              <TransportForm />
            </TabsContent>
            <TabsContent value="delivery">
              <DeliveryForm />
            </TabsContent>
          </Card>
        </Tabs>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recent Requests</h2>
          <RequestsList type={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Services;
