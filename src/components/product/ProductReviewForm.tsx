'use client';

import { useState } from 'react';
import type { Review } from '@/types';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SectionTitle from '@/components/section/SectionTitle';

export default function ProductReviewFormContent({ onSubmit }: { onSubmit: (review: Review) => void }) {
  const ratingNumbers = [5, 4, 3, 2, 1];
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('5');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      setError(true);
      return;
    }
    setError(false);
    onSubmit({ author: 'Anonymous', comment, rating: Number(rating) });
    setComment('');
    setRating('5');
  };

  return (
    <div className='my-10'>
      <SectionTitle>Make your review</SectionTitle>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Select value={rating} onValueChange={setRating}>
            <SelectTrigger>
              <SelectValue placeholder="Select rating" />
            </SelectTrigger>
            <SelectContent>
              {ratingNumbers.map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value} stars
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="comment">Comment</Label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setError(false);
            }}
            placeholder="Write your review here..."
            className={`min-h-[100px] ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          />
          {error && <p className="text-sm text-red-500">Please write a comment</p>}
        </div>
        <Button type="submit" className='mt-6'>Submit Review</Button>
      </form>
    </div>
  );
}
