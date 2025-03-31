'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function RatingSelect({ value, onChange }: Props) {
  return (
    <div className="space-y-2">
      <Select
        value={value.toString()}
        onValueChange={(val) => onChange(Number(val))}
      >
        <SelectTrigger className="w-full sm:w-48">
          <SelectValue placeholder="Select a rating" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {[5, 4, 3, 2, 1].map((r) => (
            <SelectItem key={r} value={r.toString()}>
              {r} Star{r > 1 && 's'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
