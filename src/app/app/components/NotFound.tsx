import { LucideFlaskConicalOff } from 'lucide-react';

// NotFound.tsx
const NotFound = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="my-12 flex flex-col items-center">
        <LucideFlaskConicalOff className="h-24 w-24 text-[#8592AD]" />
        <h3 className="mt-3 text-center text-sm text-primary">No results found.</h3>
      </div>
    </div>
  );
};

export default NotFound;
