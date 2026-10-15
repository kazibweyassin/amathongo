export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
};

/**
 * Publish only words a client has agreed to share.
 * Leave this empty rather than inventing reviews, names, or star ratings.
 */
export const testimonials: Testimonial[] = [];
