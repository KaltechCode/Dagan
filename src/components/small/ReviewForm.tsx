import { Textarea } from "../ui/shared/TextArea";

export default function ReviewForm() {
  return (
    <Textarea
      label="Review"
      placeholder="Write your review..."
      description="Minimum 100 characters."
      required
    />
  );
}
