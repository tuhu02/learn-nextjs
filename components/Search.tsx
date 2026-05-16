import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

        <Input
          type="text"
          placeholder="Search ..."
          className="h-9 pl-9 focus-visible:border-amber-700 focus-visible:ring-amber-700/30"
        />
      </div>
    </div>
  );
}
