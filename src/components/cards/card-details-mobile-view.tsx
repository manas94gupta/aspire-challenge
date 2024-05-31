'use client';

// Components
import { CardDetails } from './card-details';
import { CardActions } from './card-actions';

export function CardDetailsMobileView() {
  return (
    <div className="bg-white rounded-t-3xl flex flex-col gap-6 pb-bottomnav-height">
      <CardActions />

      <div className="px-6">
        <CardDetails />
      </div>
    </div>
  );
}
