import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';
import { LucideIcon } from 'lucide-react';

interface OrderTrackingStageProps {
  id: string;
  icon: LucideIcon;
  completed: boolean;
  onClick?: () => void;
  isAdmin?: boolean;
}

export default function OrderTrackingStage({
  id,
  icon: Icon,
  completed,
  onClick,
  isAdmin = false
}: OrderTrackingStageProps) {
  const { t } = useTranslation();

  return (
    <div 
      className={cn(
        "flex flex-col items-center",
        isAdmin && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors",
        completed 
          ? "bg-green-500 text-white"
          : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400",
        isAdmin && !completed && "hover:bg-gray-300 dark:hover:bg-gray-600"
      )}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="mt-2 text-center">
        <span className="text-sm font-medium text-gray-900 dark:text-white block">
          {t(`order.tracking.${id}.title`)}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block max-w-[120px]">
          {t(`order.tracking.${id}.details`)}
        </span>
      </div>
    </div>
  );
}