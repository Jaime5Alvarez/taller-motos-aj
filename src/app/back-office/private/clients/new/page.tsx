import { NewClientFormClient } from "@/components/clients/new-client-form-client";
import { Card } from "@/components/ui/card";

export default function NewClientPage() {
  return (
    <div className="container mx-auto py-6 px-4">
      <Card>
        <NewClientFormClient />
      </Card>
    </div>
  );
}
