import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, User, Clock } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  author: string;
  price: number;
  duration: number;
  rating: number;
  image: string;
  courseId: string;
  authorId: string;
  users: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({
    title,
    author,
    price,
    duration,
    rating,
    image,
    courseId,
    authorId,
    users,
  }) => {
    const navigate = useNavigate();
  
    const handleCardClick = () => {
      navigate(`/course/${courseId}`);
    };
  
    const handleAuthorClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      navigate(`/author/${authorId}`);
    };
  
    return (
      <Card
        className="w-full h-auto md:h-[200px] border-0 bg-white rounded-lg shadow-inner shadow-sm hover:shadow-hover-even 
        transition-shadow duration-300 p-4 flex flex-col justify-between cursor-pointer"
        onClick={handleCardClick}
      >
        {/* Main Content */}
        <div className="flex flex-1">
          {/* Left Section */}
          <div className="flex-1">
            <CardTitle className="text-sm md:text-base line-clamp-2 mb-1 hover:underline">
              {title}
            </CardTitle>
            <CardDescription
              className="text-xs md:text-sm text-gray-600 mb-2 hover:underline"
              onClick={handleAuthorClick}
            >
              {author}
            </CardDescription>
          </div>
  
          {/* Right Image */}
          <div className="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0 ml-4">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
  
        {/* Icons Section */}
        <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-600 mb-1">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-gray-500 hover:text-yellow-500 transition duration-200" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4 text-gray-500 hover:text-blue-500 transition duration-200" />
            <span>{users}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-gray-500 hover:text-blue-500 transition duration-200" />
            <span>{duration} hours</span>
          </div>
        </div>
  
        {/* Footer Section */}
        <div className="flex items-center space-x-2">
          <span className="text-sm md:text-lg text-blue-500 font-bold">{price} TON</span>
        </div>
      </Card>
    );
};
  
