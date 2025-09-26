import { Card } from "@/components/ui/card";
import { NewClientFormClient } from "@/components/clients/new-client-form-client";

export default function NewClientPage() {
  return (
    <div className="container mx-auto py-6 px-4">
      <Card>
        <NewClientFormClient />
      </Card>
    </div>
  );
}
