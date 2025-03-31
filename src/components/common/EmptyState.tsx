type Props = {
  message: string;
  className?: string;
};

export default function EmptyState({ message, className }: Props) {
  return (
    <div className={`text-sm text-gray-500 text-center ${className || ''}`}>
      {message}
    </div>
  );
}
