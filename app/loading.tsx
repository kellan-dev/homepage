import { Spinner } from "@/components/ui-custom/spinner";

export default function Loading() {
  return (
    <div className="flex h-screen justify-center">
      <Spinner size="xl" />
    </div>
  );
}
