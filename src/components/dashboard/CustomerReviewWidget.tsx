import { Star, ExternalLink, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { Review } from "../../data/mockData";

interface CustomerReviewWidgetProps {
  reviews: Review[];
}

export function CustomerReviewWidget({ reviews }: CustomerReviewWidgetProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg text-gray-800">
          Customer Review
        </h3>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm text-gray-600 font-medium bg-gray-50">
            Latest <ChevronDown className="h-4 w-4" />
          </button>
          <button className="p-1.5 border rounded-lg text-gray-400 hover:bg-gray-50">
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-50 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  className="h-10 w-10 rounded-full bg-gray-200"
                  alt={review.name}
                />
                <span className="font-bold text-gray-900">{review.name}</span>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            {review.comment && (
              <p className="text-gray-600 text-sm leading-relaxed italic mb-3">
                {review.comment}
              </p>
            )}
            <p className="text-gray-400 text-xs font-medium">{review.time}</p>
          </div>
        ))}

        {/* Static additional review */}
        <div className="border-b border-gray-50 pb-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/150?img=9"
                className="h-10 w-10 rounded-full bg-gray-200"
                alt="Rina T"
              />
              <span className="font-bold text-gray-900">Rina T</span>
            </div>
            <div className="flex text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
          </div>
          <p className="text-gray-400 text-xs font-medium">10 minutes ago</p>
        </div>
      </div>
    </motion.div>
  );
}

export default CustomerReviewWidget;
